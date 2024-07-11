import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoutes =  ({element}) => {
  
  const { user, isAutenticate, isloading } = useAuth();
  // console.log(isloading, isAutenticate)
  
  if (isloading) {
    return <h1>Loading...</h1>
  }
  // ¿El usuario está autenticado? Entonces pasa al elemento, de lo contrario redirige al registro
  if(!isloading && !isAutenticate) return <Navigate to='/login'  />;

  return element

};
export default ProtectedRoutes;