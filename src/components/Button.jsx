export const Button = ({ children, className, onClick }) => {

  return (
    <button onClick={onClick} className={`py-2 flex items-center justify-center gap-3 text-lg font-medium text-gray-100 bg-teal-500 hover:bg-teal-600 active:scale-95 rounded-lg transition-colors duration-200 ${className}`}>{children}</button>
  )
}