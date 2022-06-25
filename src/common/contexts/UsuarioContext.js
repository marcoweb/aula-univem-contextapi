import { createContext, useState } from "react"

const UsuarioContext = createContext('')
UsuarioContext.displayName = "Usuário"

const UsuarioContextProvider = ({ children }) => {
    const [usuario, setUsuario] = useState('Marco')

    return (
        <UsuarioContext.Provider value={{usuario, setUsuario}}>
            {children}
        </UsuarioContext.Provider>
    )
}

export {UsuarioContext, UsuarioContextProvider}