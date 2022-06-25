import { useContext } from "react"
import styled from "styled-components"
import { TemaContext, TemaContextProvider, temas } from "../common/contexts/TemaContext"

const Pannel = styled.div`
    background-color: ${props => props.cor.segundoPlano};
    color: ${props => props.cor.primeiroPlano};
`

const Exibe = () => {
    const {tema} = useContext(TemaContext)
    return (
        <Pannel cor={tema}>
            <h1>Teste</h1>
        </Pannel>
    )
}

const InicioTema = () => {
    return (
        <TemaContextProvider>
            <Exibe />
        </TemaContextProvider>
    )
}

export default InicioTema