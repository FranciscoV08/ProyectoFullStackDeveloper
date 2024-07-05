import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RegisterPage} from './pages/RegisterPage'
import { LoginPage } from './pages/LoginPage'
import { AuthProvider } from './context/AuthContext'
import { HomePage } from './pages/HomePage'
import { TasksFormPage } from './pages/TasksFormPage'
import { TasksPage } from './pages/TasksPage'
import { ProfilePages } from './pages/ProfilePages'
import { ProtectecRoutes } from './ProtectecRoutes'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/tasks",
    element: <ProtectecRoutes elememt={<TasksPage />} />
  },
  {
    path: "/add-task",
    element: <ProtectecRoutes elememt={<TasksFormPage />} />
  },
  {
    path: "/task:id",
    element: <ProtectecRoutes element={<TasksFormPage />} />
  },
  {
    path: "/profile",
    element: <ProtectecRoutes elememt={<ProfilePages />} /> 
  },
])
// Renderizamos la aplicación en el elemento con id 'root'
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode es una herramienta para destacar problemas potenciales en la aplicación
  <React.StrictMode>
    {/* Proveedor de contexto de autenticación que envuelve la aplicación */}
    <AuthProvider>
      {/* Proveedor de enrutador que envuelve la aplicación */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)