import { useState } from "react"
import { Posteo } from "./Posteo"

export const Initiation = () => {
    const [post, setPost] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        const { post } = Object.fromEntries(new window.FormData(e.target))

        //Agregar validaciones
        if(post === ''){
            //setError('El campo es vacio')    
            return
        }
        if(post.length > 352){
            //setError('El posteo supera los 352 caracteres permitidos')
            return
        }
        console.log({ post })
        setPost(post)
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
            <Posteo 
                post={post}
            />
        </div>
    )
}