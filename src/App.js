import './App.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from './pages/Register';
import Write from './pages/Write';
import Single from './pages/Single';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const Layout = () =>{
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/single",
    element: <Single />,
  },
  {
    path: "/write",
    element: <Write />,
  },
]);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
