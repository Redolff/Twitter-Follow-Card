import { useContext, useState } from 'react';
import './App.css'
import { Login } from './components/Login'
import { TwitterCard } from './components/TwitterCard';
import { LoginContext } from './context/LoginProvider';

const App = () => {
    const { login } = useContext(LoginContext)

    return (
        <main>
            <h1> Twitter Ui </h1>
            {
                login 
                ? <TwitterCard />
                : <Login />
            }
        </main>
    )
}

export default App