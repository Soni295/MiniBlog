import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/login';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div>main</div>,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
