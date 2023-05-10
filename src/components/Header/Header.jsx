import { useContext } from "react";
import logo from "../../todolist-logo.png";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import {toDoContext} from "../../App"
import styles from "./Header.module.css"
const Header = () => {

  const toDoContextData = useContext(toDoContext)
  const {isLightTheme} = toDoContextData
  console.log(isLightTheme)
  return (
 <>
    <header className = {isLightTheme.lightTheme ? styles.header : styles.headerDark}>
        <img src={logo} className = {styles.logo} alt="logo" />
        <ThemeChanger/>
    </header>
</>
  )
}

export default Header