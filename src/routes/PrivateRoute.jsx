import React, { Children, useContext } from 'react'
import useAuth from '../hooks/useAuth'
import { useLocation } from 'react-router-dom'
import Loading from '../components/loding/Loading'

function PrivateRoute({children}) {
    const {user,loading} = useAuth()
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
