import React, { useEffect, useState } from 'react'

export const useFetch = (key) => {

    const [data, setData] = useState([])
    const [isLoading,setIsLoading]=useState(true)
    function getData() {
      fetch(key)
        .then(res => res.json())
        .then(data => {
            setData(data)
            setIsLoading(false)
        })
    }
  
    useEffect(() => {
      getData()
    }, [key])
  return (
    [data,isLoading]
  )
}
