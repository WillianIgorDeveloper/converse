import { CheckCircle } from "phosphor-react"

export const MailSended = ({ full }) => {

  return (
    <div className={`w-full flex items-center justify-center text-green-500 ${full && "h-screen"}`}>
      <span className="flex items-center gap-3 text-xl font-medium"><CheckCircle className="text-3xl" />Verifique seu email!</span>
    </div>
  )
}