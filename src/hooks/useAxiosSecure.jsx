import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useAuth from './useAuth'
import { useEffect } from 'react';
import { auth } from '../firebase/FirebaseAuth';


const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials:true
})
const  useAxiosSecure =()=> {
  useEffect(()=>{
    axiosSecure.interceptors.response.use(res => {return res},
    error =>{
        console.log(error.response)
        if(error.response.status === 401 || error.response.status === 403){
            LogOutUser(auth)
            .then(result => {
              AlertSuccess("Log Out")
              
            })
            .catch(error =>{
              AlertError(error.code || error.message)
            })
        }
    }
  )
  },[])
   
 return  axiosSecure
  
}

export default useAxiosSecure
