import { useContext } from "react"
import {toDoContext} from "../../App"
import styles from "./ThemeChanger.module.css"


const ThemeChanger = () => {
  const toDoContextData = useContext(toDoContext)
  const {themeChangerHandler,isLightTheme} = toDoContextData
  return (
    <div className={styles.themeChanger}>
        <button className={isLightTheme.lightTheme ? styles.themeChangerBtnLight :styles.themeChangerBtnDark} onClick={themeChangerHandler}>
           {isLightTheme.text}
        </button>
        </div>
  )
}

export default ThemeChanger