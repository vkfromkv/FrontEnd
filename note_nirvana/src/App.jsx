import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../Pages/RootLayout";
import About from "../Pages/About";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [{ path: "/about", element: <About></About> }],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
