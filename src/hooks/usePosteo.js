import { useEffect, useState } from "react"

export const usePosteo = () => {
    const [posteos, setPosteos] = useState([])

    useEffect(() => {
        const API = 'https://jsonplaceholder.typicode.com/posts'
        const fetchData = async() => {
            try{
                const response = await fetch(API)
                if(!response.ok){
                    throw new Error('Error fetching data')
                }
                const data = await response.json()
                setPosteos(data)
            }
            catch(error){
                throw new Error(error.message)
            }
        }
        fetchData()
    }, [])

    return { posteos }
}