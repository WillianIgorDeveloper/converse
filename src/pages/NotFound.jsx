import { Link } from "react-router-dom"

export const NotFound = ()=> {

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center text-center">
      <img src="/404-error-page.svg" alt="Ilustração" className="h-4/5" />
      <h1 className="text-5xl">Página não encontrada!</h1>
      <Link to='/' className="underline p-3 text-lg">Retornar para a Home</Link>
    </div>
  )
}