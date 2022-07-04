import { useContext, useEffect, useState } from "react"
import { AppContext } from "../context/AppContext"
import langStr from "../assets/i18n"

const themes = ["auto", "light", "dark"]

export default function ThemeController() {
    const { lang } = useContext(AppContext)
    const [theme, setTheme] = useState<string>(
        localStorage.getItem("theme") || ""
    )

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.code === "ArrowUp") {
                setTheme((prev) => prevItem(themes, prev))
            }

            if (e.code === "ArrowDown") {
                setTheme((prev) => nextItem(themes, prev))
            }
        }

        window.addEventListener("keydown", onKeyDown)

        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])

    useEffect(() => {
        localStorage.setItem("theme", theme)

        const body = document.querySelector("body") as HTMLBodyElement
        body.dataset.theme = theme
    }, [theme])

    return (
        <div>
            <label htmlFor="theme">{langStr[lang].theme}</label>
            <select
                style={{ marginLeft: 8 }}
                name="theme"
                value={theme}
                onChange={({ currentTarget: { value } }) => setTheme(value)}
            >
                {themes.map((i) => (
                    <option key={i} value={i}>
                        {langStr[lang][i as never]}
                    </option>
                ))}
            </select>
        </div>
    )
}

function prevItem(arr: any[], current: any) {
    const currentIndex = arr.indexOf(current)

    if (currentIndex === -1) return null

    let prevIndex = currentIndex === 0 ? arr.length - 1 : currentIndex - 1

    return arr[prevIndex]
}

function nextItem(arr: any[], current: any) {
    const currentIndex = arr.indexOf(current)

    if (currentIndex === -1) return null

    let nextIndex = (currentIndex + 1) % arr.length

    return arr[nextIndex]
}
