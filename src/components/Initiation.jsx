import { useState } from "react"
import { Posteo } from "./Posteo"

export const Initiation = () => {
    const [post, setPost] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const { post } = Object.fromEntries(new window.FormData(e.target))

        //Agregar validaciones

        console.log({ post })
    } 

    return (
        <div className="initiation">
            <header className="header">
                <div className="para-ti">
                    <h2> Para ti </h2>
                </div>
                <div className="siguiendo">
                    <h2> Siguiendo </h2>
                </div>
            </header>
            <form className="formulario" onSubmit={handleSubmit}>
                <textarea name="post" placeholder='¡¿Que esta pasando?!' />
                <button type="submit"> Postear </button>
            </form>
            <Posteo />
        </div>
    )
}