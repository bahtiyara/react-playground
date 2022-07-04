import { createContext, useState, ReactNode } from "react"

type AppContenxtType = {
    lang: Lang
    setLang: React.Dispatch<React.SetStateAction<Lang>>
}

export const AppContext = createContext({} as AppContenxtType)

export function AppContextProvider(props: { children: ReactNode }) {
    let langStored = localStorage.getItem("lang")

    if (!langStored) {
        langStored = "en-US"
        localStorage.setItem("lang", langStored)
    }

    const [lang, setLang] = useState<Lang>(langStored as Lang)

    return (
        <AppContext.Provider value={{ lang, setLang }}>
            {props.children}
        </AppContext.Provider>
    )
}
