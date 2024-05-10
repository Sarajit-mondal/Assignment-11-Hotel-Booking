import React, { Children, useContext } from 'react'
import { userContext } from './AuthProvider'
import { Navigate, useLocation } from "react-router-dom";
import Loading from '../components/loading/Loading';
function PrivateRoute({children}) {
    const {user,loading} = useContext(userContext)
    const location = useLocation()
   
    
    if(user){
       return <div> {children}</div>
    }
    if(loading){
        return <Loading></Loading>
    }

    return <Navigate state={location.pathname} to="/logIn"></Navigate>
      
    
}

export default PrivateRoute
