// Importo la instancia formateade de axios 
import axios from "./axios"; 

// funcion que toma el usuario y lo manda al backend
export const registerRequest = (user) => axios.post('/register',user);
export const loginRequest = (user) => axios.post('/login',user);
export const verifiTokenReques = () => axios.get('/verify')

// export const registerRequest = (user) => {
//     try {
//         // Realizamos la solicitud POST a la URL de registro con los datos del usuario
//         const response = axios.post(`${API}/register`, user);
    
//         // Manejo de la respuesta exitosa
//         console.log('Registro exitoso:', response.data);
    
//         // Retornamos los datos de la respuesta para que puedan ser usados más adelante
//         return response.data;
//       } catch (error) {
//         // Manejo de errores
//         console.error('Error al registrar:', error);
    
//         // Podrías manejar el error de otras maneras, como lanzando una excepción
//         throw error;
//       }
// };
