import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

function useRoomsData() {
  const getData = async() =>{
    const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/allRoom`)
    return data
   }
    const query = useQuery({ queryKey: ['allRoom'], queryFn: getData })

    
  return (
   query
  )
}

export default useRoomsData
