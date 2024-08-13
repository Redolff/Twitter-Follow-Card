import { useContext } from 'react'
import '../styles/Login.css'
import { LoginContext } from '../context/LoginProvider'

export const Logout = () => {
    const { login, setLogin } = useContext(LoginContext)

    return (
        <div className="logout">
            <button onClick={() => setLogin(!login)}>Cerrar sesion</button>
        </div>
    )
}