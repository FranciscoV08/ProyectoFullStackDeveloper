// Nos facilitara el tema del formulario
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export const RegisterPage = () => {
  // Useform extraemos las funciones que nos facilitaran el formulario

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAutenticate, error: AuthError } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAutenticate) navigate("/tasks");
  }, [isAutenticate]);

  const onSubmit = handleSubmit(async (value) => {
    signup(value);
    // console.log(usuario);
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
          <h1 className="text-xl font-bold">Registro</h1>
        {AuthError &&
          AuthError.map((err, i) => (
            <div
              className="bg-red-500 p-2 text-white m-2 rounded-md text-center"
              key={i}
            >
              <p>{err}</p>
            </div>
          ))}
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
            placeholder="username"
          />
          {errors.username && (
            <p className="text-red-500"> Username es requerido </p>
          )}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
            placeholder="email"
          />
          {errors.email && <p className="text-red-500"> email es requerido </p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md m-2"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500"> password es requerido </p>
          )}
          <button 
          className="bg-blue-600 p-3 rounded-md font-bold"
          type="submit">Register</button>
        </form>
        <p className="flex gap-2 justify-between my-2">
          ¿Ya tienes una cuenta?{" "}
          <Link to={"/login"} className="text-sky-200">
            Iniciar Sesion
          </Link>
        </p>
      </div>
    </div>
  );
};
