import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import { HomePage } from "./pages/HomePage";
import { TasksFormPage } from "./pages/TasksFormPage";
import { TasksPage } from "./pages/TasksPage";
import { ProfilePages } from "./pages/ProfilePages";
import ProtectedRoutes from "./ProtectedRoutes";
import { TaskProvider } from "./context/TasksContext";
import { Navbar } from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      // Paths Protegidas
    
      {
        path: "/tasks",
        element: <ProtectedRoutes element={<TasksPage />} />,
      },
      {
        path: "/add-task",
        element: <ProtectedRoutes element={<TasksFormPage />} />,
      },
      {
        path: "/tasks/:id",
        element: <ProtectedRoutes element={<TasksFormPage />} />,
      },
      {
        path: "/profile",
        element: <ProtectedRoutes element={<ProfilePages />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>
);
