import { useState } from "react"
import { Posteo } from "./Posteo"

export const Initiation = () => {
    const [post, setPost] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const { post } = Object.fromEntries(new window.FormData(e.target))
    } 

    return (
        <div className="initiation">
            <header className="header">
                <h2> Para ti </h2>
                <h2> Siguiendo </h2>
            </header>
            <form className="formulario" onSubmit={handleSubmit}>
                <textarea name="post" placeholder='¡¿Que esta pasando?!' />
                <button type="submit"> Postear </button>
            </form>
            <Posteo />
        </div>
    )
}