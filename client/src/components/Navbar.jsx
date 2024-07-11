import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const { isAutenticate, logout, usuario} = useAuth();
  
 const nombre = isAutenticate && (usuario.username)
//  console.log(nombre)

  
  return (
    <div>
      <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 rounded-lg">
        <Link to={"/"}>
          <h1 className="text-2xl font-bold">Tasks Manager</h1>
        </Link>
        {/* Esta autenticado? */}
        <ul className="flex gap-x-5">
          {isAutenticate ? (
            <>
              <p className="">Usuario: <span className="bg-blue-500 rounded-md p-2 font-bold">{ nombre }</span></p>
              <li>
                <Link to={"/tasks"}>Mis Tareas</Link>
              </li>
              <li>
                <Link to={"/add-task"}>Agregar Tarea</Link>
              </li>
              <li className="bg-red-600 p-3 rounded-md font-bold">

                <Link onClick={() => logout()} >Salir</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>

              <li>
                <Link to={"/register"}>register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
