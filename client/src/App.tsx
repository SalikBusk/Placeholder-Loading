import React from 'react';
import './App.css';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Index from './Pages/Index';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/about",
    element: <div><Skeleton circle width={100} height={100}/></div>,
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
