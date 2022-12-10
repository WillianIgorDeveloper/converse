import { useState } from 'react'
import { Input, ConfigProvider } from 'antd';
import { BugBeetle, GearSix, PaperPlaneTilt } from "phosphor-react"
import { ThemeToggle } from '../components/ThemeToggle'

export const App = () => {

  const { TextArea } = Input;

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
          </div>
          <div className="flex-1 px-3 overflow-y-auto">
            <Message />
            <Message />
            <Message />
            <Message />
          </div>
          <div className="p-3 flex gap-3 items-center bg-gray-100 dark:bg-gray-800">
            <TextArea
              placeholder="Mensagem"
              autoSize={{
                maxRows: 4,
              }}
              className="placeholder:text-gray-400 text-gray-600 dark:bg-gray-700 dark:border-none dark:text-gray-200"
            />
            <PaperPlaneTilt className="text-xl cursor-pointer" />
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
      {editUserModal && <UserModal editUserModal={editUserModal} setEditUserModal={setEditUserModal} />}
    </>
  )
}



export const UsersCard = () => {
  return (
    <div className="w-full pb-3 flex justify-center items-center gap-3 border-b border-gray-300 dark:border-gray-700 last:border-0">
      <div className="relative">
        <img src="/src/assets/profile.jpg" className="rounded-full w-10 h-10" />
        <div className="w-3 h-3 rounded-full bg-green-400 absolute top-0 right-0"></div>
      </div>
      <div className="hidden md:block flex-1 overflow-hidden ">
        <span className="truncate block">Profile nickname</span>
        <span className="text-xs block truncate">Profile message</span>
      </div>
    </div>
  )
}



export const Message = () => {

  return (
    <div className="flex gap-3 border-b border-gray-300 dark:border-gray-700 py-3 last:border-0">
      <img src="/src/assets/profile.jpg" className="w-10 h-10 rounded-full mt-3" />
      <div className="flex-1">
        <span className="text-sm text-gray-500">Profile name</span>
        <p>Olá!</p>
      </div>
    </div>
  )
}



export const UserModal = ({ editUserModal, setEditUserModal }) => {

  return (
    <div className="fixed w-full h-screen top-0 left-0 backdrop-blur flex items-center justify-center">
      <div className="w-4/5 bg-gray-100 flex flex-col items-center justify-center p-3 rounded-lg z-20">
        <h1>Editar perfil</h1>
      </div>
      <div className="w-full h-screen absolute top-0 left-0 z-10" onClick={() => { setEditUserModal(!editUserModal) }}></div>
    </div>
  )
}