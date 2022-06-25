import { createContext, useState } from "react";

const temas = {
    claro: {
        primeiroPlano: "#000000",
        segundoPlano: "#FFFFFF"
    },
    escuro: {
        primeiroPlano: "#FFFFFF",
        segundoPlano: "#000000"
    }
}

const TemaContext = createContext()
TemaContext.displayName = "Cores"

const TemaContextProvider = ({ children }) => {
    const [tema, setTema] = useState(temas.claro)

    return (
        <TemaContext.Provider value={{tema}}>
            { children }
        </TemaContext.Provider>
    )
}

export {TemaContext, TemaContextProvider, temas}