import { useState } from "react"

const UserData = ({nome}) => {
    return (
        <p>{nome}</p>
    )
}

const UserPannel = ({nome}) => {
    return (
        <div>
            <h2>Dados do Usuário</h2>
            <UserData nome={nome} />
        </div>
    )
}

const Inicio = () => {
    const [usuario, setUsuario] = useState('')
    return (
        <>
            <input value={usuario} onChange={(e) => setUsuario(e.target.value)} />
            <UserPannel nome={usuario} />
        </>
    )
}

export default Inicio