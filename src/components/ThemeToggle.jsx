import { Moon, Sun } from "phosphor-react"
import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ThemeToggle = ({ className }) => {

  const {
    changeTheme,
    setChangeTheme
  } = useContext(ThemeContext)

  return (
    <div className={className}>
      {
        localStorage.theme === undefined || localStorage.theme === "dark"
          ? <Sun className="cursor-pointer" onClick={()=>{setChangeTheme(!changeTheme); localStorage.theme = 'light'}} />
          : <Moon className="cursor-pointer" onClick={()=>{setChangeTheme(!changeTheme); localStorage.theme = 'dark'}} />
      }
    </div>
  )
}