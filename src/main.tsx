
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RecipeDetails from "../src/Pages/RecipeDetails";

const router = createBrowserRouter([
  {path: "/", element: <App />}, {  path: "/details", element: <RecipeDetails  /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
