import axios from './axios'
// Obtener todas
export const getTasksRequest = () => axios.get('/tasks')
// Obtener una 
export const getTaskRequest = (id) => axios.get(`/tasks/${id}`)
// Create tarea
export const createTaskRequest = (task) => axios.post('/tasks', task)
// Obtener Subir tarea  
export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task)
// Eliminar tarea
export const deletTaskRequest = (id) => axios.delete(`/tasks/${id}`)