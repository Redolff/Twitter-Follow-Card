import { createContext, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [userLogin, setUserLogin] = useState(null) 

    return (
        <LoginContext.Provider value={{ login, setLogin, userLogin, setUserLogin }}>
            {children}
        </LoginContext.Provider>
    )
}