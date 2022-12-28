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
import Footer from './components/Footer';

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
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
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
