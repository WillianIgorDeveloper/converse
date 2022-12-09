import { DiscordLogo, GoogleLogo, MagicWand, User } from "phosphor-react"
import { Button } from "../components/Button"
import { Input, ConfigProvider } from 'antd';

export const Login = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#14b8a6',
        },
      }}
    >
      <main className="flex flex-col min-h-screen md:flex-row">
        <img src="/mobile-login-animate.svg" alt="Ilustração" className="h-0 md:h-auto md:w-1/2" />
        <div className="bg-gray-100 dark:bg-gray-800 flex-1 flex flex-col justify-center items-center gap-4 p-5">
          <h1 className="text-4xl font-bold">Login</h1>
          <Button className="w-4/5"><GoogleLogo className="text-xl" weight="bold" />Entrar com Goole</Button>
          <Button className="w-4/5"><DiscordLogo className="text-xl" weight="bold" /> Entrar com Discord</Button>
          <form className="w-full flex justify-center pt-4">
            <fieldset className="w-4/5 flex flex-col items-center text-center border-t pt-4 gap-3">
              <legend className="px-3 flex items-center justify-center gap-3">Entrar com Link mágico <MagicWand /></legend>
              <label htmlFor="email" className="hidden">Email</label>
              <Input size="large" name="email" placeholder="Digite o seu email" prefix={<User className="text-xl text-gray-500" weight="bold" />} className="border-gray-500 w-full placeholder:text-gray-400" type="email" />
              <Button className="w-full" submit >Enviar</Button>
            </fieldset>
          </form>
          <p></p>
        </div>
      </main>
    </ConfigProvider>
  )
}