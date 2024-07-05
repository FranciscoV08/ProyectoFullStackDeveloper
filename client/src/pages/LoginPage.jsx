import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {Link} from "react-router-dom"

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, //Extraigo los errores para mostrarlo
  } = useForm();

  const { signin, error:signinError } = useAuth();

  const onSubmit = handleSubmit((data) => {
    signin(data);
    console.log(signinError);
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-zinc-800 max-w-md p-10 rounded-md">
        <form onSubmit={onSubmit}>
          { signinError.map((err, i) => (
            <div className="bg-red-500 p-2 text-white m-2 rounded-md text-center" key={i}>
              <p>{err}</p>
            </div>
          ))
          }

          <h1 className="text-xl font-bold">Inicia sesion</h1>

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
            type="submit"
          >
            Login
          </button>
            <p className="flex gap-2 justify-between my-2">
              ¿No tienes una cuenta? <Link to={'/register'} className="text-sky-200">Registrate</Link>
            </p>
        </form>
      </div>
    </div>
  );
};
