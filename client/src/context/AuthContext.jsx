// Importamos los módulos necesarios de React
import { createContext, useState, useContext, useEffect } from "react";
// Importamos la función que se encargará de hacer la petición al backend
import { loginRequest, registerRequest, verifiTokenReques } from "../api/auth.js";
// Paquete para leer las cookie 
import Cookies from "js-cookie";
// Creamos el contexto de autenticación
export const AuthContext = createContext();


// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    // Si el hook es usado fuera del provider, lanzamos un error
    throw new Error("useAuth debería estar dentro de un provider");
  }
  // Devolvemos el contexto
  return context;
};

// Componente proveedor del contexto de autenticación
export const AuthProvider = ({ children }) => {
  // Estado para almacenar la información del usuario
  const [usuario, setUsuario] = useState(null);
  const [isAutenticate, setisAutenticate] = useState(false);
  const [error, setError] = useState([]);

  // Función para registrar un usuario
  const signup = async (user) => {
    try {
      // Realizamos la petición de registro al backend
      const res = await registerRequest(user);
      // Actualizamos el estado con los datos del usuario obtenidos de la respuesta
      setUsuario(res.data);
      // cambia el autenticador a true
      setisAutenticate(true);

      console.log(res.data);
    } catch (error) {
        setError(error.response.data.error);

    }
  };

  const signin = async (user) => {
    try {
      const res = await loginRequest(user);
      setisAutenticate(true);
      setUsuario(res.data)
      // console.log(res)

    } catch (error) {
      console.log(error)
      if(Array.isArray(error.response.data)){
        console.log(error)
       return setError(error.response.data.error);
      }
      setError([error.response.data.message])
    }
  };

  useEffect(() => {
    if(error.length > 0){
        setTimeout(() => {
            setError([])
        }, 3000);
    }
  }, [error])

  // Consultando la cookie
  useEffect(() => {
    const checkLogin = () => {
      const cookies = Cookies.get()
    if(cookies.token){
      try {
        const res = verifiTokenReques(cookies.token)
        console.log(res)
        if(!res.data) setisAutenticate(false)

        setisAutenticate(true)
        setUsuario(res.data)
      } catch (error) {
        setError(false)
        setUsuario(null)
      }
    }
    checkLogin()
    }
    
  }, [])
  
  
  return (
    // Proveedor del contexto de autenticación
    <AuthContext.Provider
      value={{
        // Exportamos las funciones y datos necesarios
        signup, // Función para registrar al usuario
        usuario, // Información del usuario
        isAutenticate, //Para saber si el usuario esta autenticado
        error,
        signin
      }}
    >
      {/* Renderizamos los componentes hijos */}
      {children}
    </AuthContext.Provider>
  );
};
