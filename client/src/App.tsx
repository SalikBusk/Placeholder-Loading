import React from 'react';
import './App.css';

import { SkeletonTheme } from 'react-loading-skeleton';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Home from './Pages/Home';
import Post from './Components/Post/Post';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/post/:userId",
    element: <Post/>,
  }
]);

function App() {
  return (
    <div className="App">
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <RouterProvider router={router}/>
      </SkeletonTheme>
    </div>
  );
}

export default App;
