import '../styles/Login.css'    
import { useLogin } from '../hooks/useLogin'

export const Login = () => {
    const { handleSubmit, error } = useLogin()

    return (
        <section className="login">
            <h3> Iniciar sesion </h3>
            <form className="form" onSubmit={handleSubmit}>
                <label> Usuario: </label>
                <input 
                    type="text" 
                    name='usuario'
                />
                <label> Contraseña: </label>
                <input 
                    type="password" 
                    name='password' 
                />

                <button type='submit'>Ingresar</button>
            </form>
            { error &&
                <h4 style={{ color: 'red' }}> {error} </h4>
            }
        </section>
    )
}