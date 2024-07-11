import { useEffect } from "react";
import { TaskCard } from "../components/TaskCard";
import { useTask } from "../context/TasksContext";

export const TasksPage =  () => {

  const {getTasks, tasks} = useTask();

  useEffect(() => {
    getTasks();
    
  }, [])
  
  if(tasks.length === 0) return (<h1 className="text-center font-bold text-xl my-5"> No existen tareas </h1>)

  return (

    <div className="grid grid-cols-3 gap-2"> 
      {

        tasks.map( (tasks) => (
            <TaskCard tasks={tasks} key={tasks._id}/>
        ))
      }

    </div>
  )
}

// createdAt
// : 
// "2024-07-08T20:45:16.021Z"
// description
// : 
// "Hacer la tarea despues de volver de la facu"
// title
// : 
// "Ir a la facu"
// updatedAt
// : 
// "2024-07-08T20:45:16.021Z"
// user
// : 
// "668b05e47034db3e27442d3b"
// __v
// : 
// 0
// _id
// : 
// "6