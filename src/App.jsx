
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"; 
import Home from "./Pages/Home/Home";


const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
    },

]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
    