// mi nuevo context para las tareas
import { createContext, useContext, useState } from "react";
import {
  createTaskRequest,
  deletTaskRequest,
  getTaskRequest,
  getTasksRequest,
  updateTaskRequest,
} from "../api/task.js";
// lo inicializo
const TaskContext = createContext();

// utilizamos el context
export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("Debe de retornar al menos un contexto");
  }
  return context;
};

// Mi contenedor para mis componentes
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  //   Cramos la tarea
  const createTask = async (task) => {
    const res = await createTaskRequest(task);
    console.log(res);
  };
  //Obtenemos las tareas
  const getTasks = async () => {
    try {
      const res = await getTasksRequest();
      setTasks(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  // eliminar tareas
  const deletTask = async (id) => {
    try {
      const res = await deletTaskRequest(id);
      // Al eliminar de la db necesito elimnarlo del array tasks
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //pedimos la tarea por id
  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;

    } catch (error) {
      console.log(error);
    }
    // console.log(res)
  };
  const updateTask = async (id, task) => {
    // No me hace falta recorrer y filtrar las tareas por que se actualiza la pag 
    try {
      const res = await updateTaskRequest(id, task)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    // Todo aqui adentro miran mis datos globales
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deletTask,
        getTask,
        updateTask 
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
