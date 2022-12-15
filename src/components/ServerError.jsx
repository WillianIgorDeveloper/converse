import { Warning } from "phosphor-react"
import { Link } from "react-router-dom"

export const ServerError = ({ full }) => {
  
  return (
    <div className={`w-full flex flex-col gap-3 items-center justify-center ${full && "h-screen"}`}>
      <span className="flex items-center gap-3 text-xl font-medium text-red-500"><Warning className="animate-bounce text-3xl" /> Ocorreu algum erro!</span>
      <Link to="/" className="text-sm underline">Retornar para a página inicial</Link>
    </div>
  )
}