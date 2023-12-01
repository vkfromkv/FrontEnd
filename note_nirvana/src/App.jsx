import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "../Pages/RootLayout";
import About from "../Pages/About";
import UserProfile from "../Pages/UserProfile";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [{ path: "/about", element: <About /> }, { path: "/user_profile", element: <UserProfile /> }],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
