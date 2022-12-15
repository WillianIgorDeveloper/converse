import { useContext, useEffect, useState } from 'react'
import { Input, ConfigProvider } from 'antd';
import { BugBeetle, GearSix, PaperPlaneTilt } from "phosphor-react"
import { ThemeToggle } from '../components/ThemeToggle'
import { SupabaseContext } from '../contexts/SupabaseContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { UserUpdated } from '../components/UserUpdated';

export const App = () => {

  const { TextArea } = Input;

  const navigate = useNavigate()

  const {
    session,
    signOut,
    handleNewPost,
    newMessage,
    setNewMessage,
    scrollRef
  } = useContext(SupabaseContext)

  useEffect(() => {
    if (session === null) navigate("/login")
  }, [session])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#14b8a6',
        },
      }}
    >
      <div className="h-screen w-full flex">
        <SideBar />
        <div className="w-full flex flex-col">
          <div className="w-full p-3 flex items-center justify-end gap-3 border-b border-gray-300 dark:border-gray-700 text-lg">
            <ThemeToggle />
            <BugBeetle />
            <span className='text-sm px-3 border rounded-lg border-gray-500 cursor-pointer' onClick={signOut}>Sair</span>
          </div>
          <div className="flex-1 px-3 overflow-y-auto" ref={scrollRef}>
            <Message />
          </div>
          <div className="p-3 flex gap-3 items-center bg-gray-100 dark:bg-gray-800">
            <TextArea
              value={newMessage}
              placeholder="Mensagem"
              autoSize={{
                maxRows: 4,
              }}
              className="placeholder:text-gray-400 text-gray-600 dark:bg-gray-700 dark:border-none dark:text-gray-200"
              onChange={(e)=>{setNewMessage(e.target.value)}}
              onKeyDown={e=>{if (e.key === "Enter" && e.shiftKey === false) {handleNewPost()}}}
            />
            <PaperPlaneTilt className="text-xl cursor-pointer" onClick={handleNewPost} />
          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}



export const SideBar = () => {

  const [editUserModal, setEditUserModal] = useState(false)

  return (
    <>
      <div className="h-full w-14 md:w-1/3 xl:w-1/5 py-3 px-1 md:p-5 flex flex-col items-center gap-3 md:gap-5 border-r border-gray-300 dark:border-gray-700">
        <div className="flex-1 self-start w-full flex flex-col gap-3 md:gap-5 overflow-y-auto">
          <UsersCard />
        </div>
        <GearSix className="text-2xl cursor-pointer hover:scale-110" weight="bold" onClick={() => { setEditUserModal(!editUserModal) }} />
      </div>
      {editUserModal && <EditUserModal editUserModal={editUserModal} setEditUserModal={setEditUserModal} />}
    </>
  )
}



export const UsersCard = () => {
  return (
    <div className="w-full pb-3 flex justify-center items-center gap-3 border-b border-gray-300 dark:border-gray-700 last:border-0">
      <div className="relative">
        <img src="/assets/profile.jpg" className="rounded-full w-10 h-10" />
        <div className="w-3 h-3 rounded-full bg-green-400 absolute top-0 right-0"></div>
      </div>
      <div className="hidden md:block flex-1 overflow-hidden ">
        <span className="truncate block">ADM Sara</span>
        <span className="text-xs block truncate">Atualizações de perfil em breve...</span>
      </div>
    </div>
  )
}



export const Message = () => {

  const {
    messages
  } = useContext(SupabaseContext)


  return (
    <>
      {
        messages && messages.map(message => {
          return (
            <div className="flex gap-3 border-b border-gray-300 dark:border-gray-700 py-3 last:border-0" key={message.id}>
              {/* <img src="/assets/profile.jpg" className="w-10 h-10 rounded-full mt-3" /> */}
              <div className="flex-1">
                <span className="text-sm text-gray-500">{message.posted_by}</span>
                <p>{message.content}</p>
              </div>
            </div>
          )
        })
      }
    </>
  )
}



export const EditUserModal = ({ editUserModal, setEditUserModal }) => {

  const {
    userNickName,
    setUserNickName,
    handleUpdateUser,
    userUpdated
  } = useContext(SupabaseContext)

  return (
    <div className="fixed w-full h-screen top-0 left-0 backdrop-blur flex items-center justify-center">
      <div className="w-4/5 max-w-xl bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center gap-3 p-3 rounded-lg z-20">
        <h1 className="text-lg font-semibold">Editar perfil</h1>
        <div className="w-full gap-3 flex flex-col">
          <Input name="nickName" placeholder="Escolha seu nome" className="border-gray-500 w-full placeholder:text-gray-400" value={userNickName} onChange={(e) => { setUserNickName(e.target.value) }} onKeyDown={e => { e.key === "Enter" && handleUpdateUser() }} />
          <Button onClick={handleUpdateUser}>Salvar</Button>
        </div>
        {
          userUpdated && <UserUpdated />
        }
      </div>
      <div className="w-full h-screen absolute top-0 left-0 z-10" onClick={() => { setEditUserModal(!editUserModal) }}></div>
    </div>
  )
}