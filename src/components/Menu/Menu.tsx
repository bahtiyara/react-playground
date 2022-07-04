import styles from "./Menu.module.css"
import LangController from "../LangController"
import ThemeController from "../ThemeController"

export default function Menu() {
    return (
        <div className={styles.menu}>
            <ThemeController />
            <LangController />
        </div>
    )
}
