import { useContext } from "react"
import { UsuarioContext } from "../common/contexts/UsuarioContext"

const UserData = () => {
    const nome = useContext(UsuarioContext)
    return (
        <p>{nome}</p>
    )
}

const UserPannel = () => {
    return (
        <div>
            <h2>Dados do Usuário</h2>
            <UserData />
        </div>
    )
}

const InicioContexto = () => {
    return (
        <UsuarioContext.Provider value="Marco">
            <UserPannel />
        </UsuarioContext.Provider>
    )
}

export default InicioContexto