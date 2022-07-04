import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import langStr from "../assets/i18n"

export default function LangController() {
    const { lang, setLang } = useContext(AppContext)

    return (
        <div>
            <label htmlFor="lang">{langStr[lang].lang}</label>
            <select
                name="lang"
                value={lang}
                onChange={({ currentTarget: { value } }) => {
                    setLang(value as Lang)
                    localStorage.setItem("lang", value)
                }}
            >
                <option value="en-US">{langStr[lang].enUS}</option>
                <option value="zh-CN">{langStr[lang].zhCN}</option>
            </select>
        </div>
    )
}
