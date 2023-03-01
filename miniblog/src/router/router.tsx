import {  createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path:"/",
    element: <div>main</div>
  },
  {
    path:"/login",
    element: <div>Login</div>
  }
])
