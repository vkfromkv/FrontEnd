import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./Pages/RootLayout";
import About from "./Pages/About";
import Publish from "./Pages/Publish";
import ContactUs from "./Pages/ContactUs";
import { action as formAction } from "./Pages/Publish";
import Lyrics from "./Pages/Lyrics";
import UserProfile from "./Pages/UserProfile";
import Homepage from "./Pages/Homepage";
import Chords from "./Pages/Chords";
import { loader as filterLoader } from "./components/carousel/FilterBar";
import { loader as publishLoader } from "./Pages/Publish";
import { loader as HomeLoader } from "./Pages/Homepage";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children: [
        { path: "/", element: <Homepage></Homepage>, loader: HomeLoader },
        { path: "/about", element: <About></About> },
        {
          path: "/publish",
          element: <Publish></Publish>,
          action: formAction,
          loader: publishLoader,
        },
        { path: "/contactus", element: <ContactUs></ContactUs> },
        { path: "/user_profile", element: <UserProfile /> },
        { path: "/chords/lyrics/:id", element: <Lyrics></Lyrics> },
        {
          path: "/chords",
          element: <Chords></Chords>,
          loader: filterLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
