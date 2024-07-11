import { Link } from "react-router-dom";
import { useTask } from "../context/TasksContext";

export const TaskCard = ({ tasks }) => {
    const {deletTask} = useTask()
//   console.log(tasks);
  const { title, description, createdAt, _id } = tasks;

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className=" flex justify-between">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex gap-x-2 items-center">
          <button onClick={() => deletTask(_id)}>Eliminar</button>
          {/* Reutilizamos el form para actualizar */}
          <Link to={`/tasks/${_id}`}>Editar</Link>
        </div>
      </header>
      <p className="text-slate-300">{description}</p>
      <p className="text-slate-300">
        {new Date(createdAt).toLocaleDateString()}
      </p>
    </div>
  );
};
