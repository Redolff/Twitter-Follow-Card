import { useContext, useState } from "react"
import { LoginContext } from "../context/LoginProvider"

export const useLogin = () => {
    const {login, setLogin} = useContext(LoginContext)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        const fields = Object.fromEntries(new window.FormData(e.target))
        const { usuario, password, repeatPassword } = fields

        // Validaciones del formulario
        if(usuario === ''){
            setError('El usuario no puede ser vacio')
            return
        }
        if(usuario.length < 4){
            setError('El usuario debe contener mas de 3 caracteres')
            return
        }
        if(password === '' || repeatPassword === ''){
            setError('La contraseña no puede ser vacia')
            return
        }
        if(password !== repeatPassword){
            setError('Las contraseñas no coinciden')
            return
        }
        if(password.length < 4 || repeatPassword.length < 4){
            setError('La contraseña debe contener mas de 3 caracteres')
            return
        }
        setLogin(!login)
        console.log('Se ha logueado correctamente')
    }

    return { error, handleSubmit }

}