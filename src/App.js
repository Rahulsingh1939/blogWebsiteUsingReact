import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>This is Home</div>,
  },
]);

function App() {
  return (
    <div className="App">
      This is a React app.
    </div>
  );
}

export default App;
