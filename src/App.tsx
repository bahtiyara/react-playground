import { useContext, useEffect } from "react"
import "./App.css"
import ThemeController from "./components/ThemeController"
import LangController from "./components/LangController"
import ModalController from "./components/ModalController/ModalController"
import Menu from "./components/Menu/Menu"
import Preset from "./components/Preset"
import { AppContext } from "./context/AppContext"
import langStr from "./assets/i18n"

export default function App() {
    const { lang } = useContext(AppContext)

    useEffect(() => {
        let themeStored = localStorage.getItem("theme")

        if (!themeStored) {
            themeStored = "auto"
            localStorage.setItem("theme", themeStored)
        }

        const body = document.querySelector("body") as HTMLBodyElement
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches

        body.dataset.theme =
            themeStored !== "auto" ? themeStored : isDark ? "dark" : "light"
    }, [])

    return (
        <div className="app">
            <h1>{langStr[lang].app}</h1>
            <ThemeController />
            {/* <LangController /> */}
            <ModalController />
        </div>
    )
}
