import { GithubLogo, Globe } from "phosphor-react"
import { Link } from "react-router-dom"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {

  return (
    <div className="overflow-hidden relative">
      <main className="container m-auto">
        <section className="flex flex-col items-center py-5 md:flex-row-reverse md:justify-evenly">
          <img src="/src/assets/top-wave.svg" alt="Imagem de Background" className="absolute -z-50 top-0 right-0 w-3/4" />
          <img src="/messaging-fun-animate.svg" alt="Ilustração" className="w-11/12 md:w-2/5" />
          <div className="flex flex-col items-center gap-2 lg:gap-3 w-4/5 font-medium md:w-2/5 lg:w-80 md:items-start text-gray-800 dark:text-gray-100">
            <p className="text-lg">Seja bem vindo ao</p>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-gray-50">Converse</h1>
            <p className="text-center text-gray-700 dark:text-gray-200 md:text-start">Um aplicativo de mensagens para você passar o tempo com os amigos</p>
            <Link to='/app' className="py-2 mt-3 w-full text-center text-xl font-medium text-gray-100 bg-teal-500 hover:bg-teal-600 active:scale-95 rounded-lg transition-colors duration-200">Entrar</Link>
          </div>
        </section>
        <section className="py-8">
          <h2 className="text-2xl font-semibold text-center py-2">Tecnologias</h2>
          <div className="p-5 flex flex-wrap justify-center gap-3 md:gap-8">
            <div className="flex flex-col items-center w-40 h-44 justify-center p-3 gap-2 bg-gray-100 dark:bg-gray-800 shadow rounded text-center hover:scale-110 transition-transform duration-200">
              <div className="flex gap-2 justify-center">
                <img src="/src/assets/icons/technologies/react.svg" alt="" className="h-12" />
                <img src="/src/assets/icons/technologies/vite.svg" alt="" className="h-12" />
              </div>
              <h3 className="text-xl text-gray-800 dark:text-gray-100">React + Vite</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Biblioteca para criação de interface de usuário</p>
            </div>
            <div className="flex flex-col items-center w-40 h-44 justify-center p-3 gap-2 bg-gray-100 dark:bg-gray-800 shadow rounded text-center hover:scale-110 transition-transform duration-200">
              <img src="/src/assets/icons/technologies/reactrouter.svg" alt="" className="h-12" />
              <h3 className="text-xl text-gray-800 dark:text-gray-100">React Router</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Biblioteca de rotas para navegação</p>
            </div>
            <div className="flex flex-col items-center w-40 h-44 justify-center p-3 gap-2 bg-gray-100 dark:bg-gray-800 shadow rounded text-center hover:scale-110 transition-transform duration-200">
              <img src="/src/assets/icons/technologies/tailwindcss.svg" alt="" className="h-12" />
              <h3 className="text-xl text-gray-800 dark:text-gray-100">Tailwind</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Estilização com estratégia<br />"mobile frist"</p>
            </div>
            <div className="flex flex-col items-center w-40 h-44 justify-center p-3 gap-2 bg-gray-100 dark:bg-gray-800 shadow rounded text-center hover:scale-110 transition-transform duration-200">
              <img src="/src/assets/icons/technologies/antdesign.svg" alt="" className="h-12" />
              <h3 className="text-xl text-gray-800 dark:text-gray-100">Ant Design</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Biblioteca de components</p>
            </div>
            <div className="flex flex-col items-center w-40 h-44 justify-center p-3 gap-2 bg-gray-100 dark:bg-gray-800 shadow rounded text-center hover:scale-110 transition-transform duration-200">
              <img src="/src/assets/icons/technologies/supabase.svg" alt="" className="h-12" />
              <h3 className="text-xl text-gray-800 dark:text-gray-100">Supabase</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Backend, database e autenticação</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-300 dark:border-gray-800 p-6 container m-auto">
        <div className="flex flex-col gap-4 text-teal-600 text-center">
          <div className="flex items-center justify-center gap-6">
            <p className=" font-light">Desenvolvido por <span className="font-semibold block">Willian Igor</span></p>
            <a href="https://github.com/WillianIgorDeveloper" target="_blank" className="hover:text-teal-400"><GithubLogo className="text-2xl" /></a>
            <a href="https://willianigordeveloper.vercel.app/" target="_blank" className="hover:text-teal-400"><Globe className="text-2xl" /></a>
            <ThemeToggle className="text-2xl hover:text-teal-400" />
          </div>
          <a href="https://storyset.com/people" className="text-xs font-light" target="_blank">People illustrations by Storyset</a>
        </div>
      </footer>
    </div>
  )
}
