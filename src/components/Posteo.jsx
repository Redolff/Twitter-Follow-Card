import { useEffect, useState } from "react"

export const Posteo = () => {
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
    }, [posteos])

    return (
        <section className="posteos">
            <ul className="posteo">
                {posteos?.slice(0, 3).map(post => (
                    <li key={post.id}>
                        <h3> Nombre de usuario </h3>
                        <p> {post.body} </p>
                    </li>
                ))}
            </ul>
        </section>
    )
}