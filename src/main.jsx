import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './routes/AllRoute.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
    </AuthProvider>
    </QueryClientProvider>
  
  </React.StrictMode>,
)
