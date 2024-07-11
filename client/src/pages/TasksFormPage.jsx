import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useTask } from "../context/TasksContext";


export const TasksFormPage = () => {
  const navigate = useNavigate()
  const params = useParams()
  // React-hook-Form
  const { register, handleSubmit, setValue } = useForm();
  // Context
  const {tasks, createTask, getTask, updateTask } = useTask()

  useEffect(() => {

    const {id} = params;
    const loadTask = async () => {
      // console.log(id)
      if(id) {
        const task = await getTask(id);
        // Establecemos los valoresal reactHokForm
        setValue('title', task.title)
        setValue('description', task.description)

        console.log(task)
      } 
    } 
    loadTask()
  }, [])
  

  // Submit del form
  const onSubmit = handleSubmit((data) => {
    // console.log(data)
    // Si lee un parametro estas editando si no estas agregando
    if(params.id){
      updateTask(params.id, data)
      navigate('/tasks');
    }else{
      // Crea la tarea 
      createTask(data)
      // redireccionamos a los tasks para mostrar
      navigate('/tasks');
    }
  });

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md ">
      <h1 className="font-bold text-xl text-center">Nueva tarea</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="title"
          {...register("title")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          autoFocus
        />
        <textarea
          rows="3"
          placeholder="description"
          {...register("description")}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
        ></textarea>
        <button className="p-2 rounded-md bg-blue-600">Guardar</button>
      </form>
    </div>
  );
};
