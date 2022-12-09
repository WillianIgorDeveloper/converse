import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

   const [changeTheme, setChangeTheme] = useState(true)

   useEffect(() => {
      if (localStorage.theme === 'dark' || !('theme' in localStorage)) {
         document.documentElement.classList.add('dark')
      } else {
         document.documentElement.classList.remove('dark')
      }
   }, [changeTheme])

   return (
      <ThemeContext.Provider value={{setChangeTheme, changeTheme}}>
         {children}
      </ThemeContext.Provider>
   )
}