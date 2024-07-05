// Importo axios 
import axios from 'axios'

// Dominio base al cual consultar para que este inserte el token del cookie 
const intanciaAxios = axios.create({
    baseURL: "http://localhost:4000/api",
    // Establece las credenciales alli 
    withCredentials: true

})

export default intanciaAxios