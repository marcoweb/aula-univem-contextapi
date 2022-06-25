import { useContext } from "react"
import { UsuarioContext, UsuarioContextProvider } from "../common/contexts/UsuarioContext"

const UserData = () => {
    const {usuario} = useContext(UsuarioContext)
    return (
        <p>{usuario}</p>
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

const InputUser = () => {
    const {usuario, setUsuario} = useContext(UsuarioContext)
    return (
        <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
    )
}

const InicioContexto = () => {
    return (
        <UsuarioContextProvider>
            <InputUser />
            <UserPannel />
        </UsuarioContextProvider>
    )
}

export default InicioContexto