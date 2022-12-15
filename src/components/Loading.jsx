import { CircleNotch } from "phosphor-react"

export const Loading = ({ full }) => {

  return (
    <div className={`w-full flex items-center justify-center ${full && "h-screen"}`}>
      <span className="flex items-center gap-3 text-xl font-medium"><CircleNotch className="animate-spin text-3xl" />Carregando...</span>
    </div>
  )
}