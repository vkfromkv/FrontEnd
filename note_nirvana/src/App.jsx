import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/RootLayout";
import About from "./Pages/About";
import Publish from "./Pages/Publish";
import { action as formAction } from "./Pages/Publish";
function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/about", element: <About></About> },
        { path: "/publish", element: <Publish></Publish>, action: formAction },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
