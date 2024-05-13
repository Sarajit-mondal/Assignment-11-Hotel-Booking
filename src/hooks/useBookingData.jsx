import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function useBookingData() {
    const getData = async() =>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allBooking`)
        return data
       }
        const query = useQuery({ queryKey: ['allBooking'], queryFn: getData })
    
        
      return (
       query
      )
}

export default useBookingData
