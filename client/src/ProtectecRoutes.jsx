import { useAuth } from "./context/AuthContext"
import { Navigate } from 'react-router-dom'

export const ProtectecRoutes = ({elememt}) => {

    const {user,isAutenticate } = useAuth();
// El Usuario esta autenticado ? entonces pasa al element de lo contrario redirijete al register
  return isAutenticate ? elememt :  <Navigate to={'/register'} replace/>
}
