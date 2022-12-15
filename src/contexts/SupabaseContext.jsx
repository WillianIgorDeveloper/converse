import { createContext, useState, useEffect, useRef } from "react"
import { createClient } from '@supabase/supabase-js'

export const SupabaseContext = createContext({})

export const SupabaseProvider = ({ children }) => {

  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
  const supabase = createClient(supabaseUrl, supabaseAnonKey)

  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState()
  const [serverError, setServerError] = useState(false)
  const [user, setUser] = useState()
  const [mailSended, setMailSended] = useState(false)
  const [userUpdated, setUserUpdated] = useState(false)
  const [messages, setMessages] = useState()
  const [newMessage, setNewMessage] = useState("")
  const [userNickName, setUserNickName] = useState("")



  const getSession = async () => {
    setLoading(true)
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) {
      setServerError(true)
      return
    }
    setSession(session)
    setLoading(false)
  }
  useEffect(() => {
    getSession()
  }, [])


  const getUser = async () => {
    setLoading(true)
    const { data: profile, error } = await supabase
      .from('profiles')
      .select("*")
      .eq('user_id', session.user.id)

    if (error) {
      setServerError(true)
      return
    }

    if (!profile.length) {
      const { error } = await supabase
        .from('profiles')
        .insert([
          { user_id: session.user.id, nick_name: "Conversador" },
        ])

      if (error) {
        setServerError(true)
        return
      }

      getUser()
      return
    }
    setUserNickName(profile[0].nick_name)
    setUser(profile[0])
    setLoading(false)
  }
  useEffect(() => {
    session && getUser()
  }, [session])


  const getMessages = async () => {
    const { data: messages, error } = await supabase
      .from('messages')
      .select('*')
    if (error) {
      setServerError(true)
      return
    }
    setMessages(messages)
  }
  useEffect(() => {
    user && getMessages()
  }, [user])


  const handleNewPost = async () => {
    if (newMessage === "") {
      setNewMessage("")
      return
    }

    const { error } = await supabase
      .from('messages')
      .insert([
        { posted_by: user.nick_name, content: newMessage, user_id: user.user_id },
      ])

    if (error) {
      setServerError(true)
      return
    }

    setNewMessage("")
  }



  useEffect(() => {
    supabase.channel('public:messages')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'messages' },
        () => {
          getMessages()
        }
      )
      .subscribe()
  }, [])



  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    window.location.href = "/";
  }


  const signInWithEmail = async (e) => {
    e.preventDefault()
    console.log(e.target.email.value)
    setLoading(true)
    const newEmail = e.target.email.value
    try {
      const { error } = await supabase.auth.signInWithOtp({ email: newEmail })
      if (error) throw error
      setMailSended(true)
    }
    catch (error) {
      setServerError(true)
    }
    finally {
      setLoading(false)
    }
  }


  const signInWithDiscord = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'discord',
    })
    error && setServerError(true)
  }


  const signInWithGitHub = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    })
    error && setServerError(true)
  }


  const handleUpdateUser = async (e) => {
    setLoading(true)
    if (userNickName === "") return
    if (user.nick_name === userNickName) return
    try {
      const { error } = await supabase
        .from('profiles')
        .update({ nick_name: userNickName })
        .eq('user_id', user.user_id)

      if (error) throw error

      setUserUpdated(true)
      setTimeout(() => { setUserUpdated(false) }, 3000)
      getUser()
    } catch (error) {
      setServerError(true)
    } finally {
      setLoading(false)
    }
  }

  const scrollRef = useRef()
  const scrollToBottom = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }
  useEffect(()=>{
    scrollToBottom()
  },[messages])



  return (
    <SupabaseContext.Provider
      value={{
        loading,
        serverError,
        session,
        user,
        mailSended,
        signInWithEmail,
        signInWithDiscord,
        signInWithGitHub,
        handleUpdateUser,
        userUpdated,
        messages,
        signOut,
        handleNewPost,
        scrollRef,
        scrollToBottom,
        newMessage,
        setNewMessage,
        userNickName,
        setUserNickName
      }}
    >
      {children}
    </SupabaseContext.Provider>
  )
}