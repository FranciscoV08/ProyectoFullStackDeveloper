
export const HomePage = () => {
  return (
    <div>
      <h1 className='p-5 font-bold text-2xl text-center'>Mi HomePages</h1>
      <div className="text-center ">
        <a className='bg-slate-400 rounded-md p-2 mx-2 font-bold text-2xl text-center text-blue-600' href="http://localhost:5173/register">Register</a>
        <a className='bg-slate-400 rounded-md p-2 font-bold text-2xl text-center text-blue-600' href="http://localhost:5173/login">Login</a>
      </div>
    </div> 
  )
}
