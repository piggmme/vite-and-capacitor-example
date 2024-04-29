import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Todo from './Todo.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<App />} />
      <Route
        path="/todo"
        element={<Todo />}
      />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
