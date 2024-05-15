import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useContext } from 'react'
import { userContext } from '../providers/AuthProvider'

function useBookingData() {
  const {user} =useContext(userContext)
    const getData = async() =>{                     
       const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allBooking/${user.email}`)
        return data
       }
        const query = useQuery({ queryKey: ['allBooking'], queryFn: getData })
    
        
      return (
       query
      )
}

export default useBookingData
