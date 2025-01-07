import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  
  RouterProvider
} from "react-router-dom";
import router from './assets/Route/router';
import AuthProvoder from './assets/PRobider/AuthProvider';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvoder>
    <RouterProvider router={router} />
    </AuthProvoder>

    
  </StrictMode>,
)
