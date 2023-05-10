import logo from "../../todolist-logo.png";
import {toDoContext} from "../../App"
import styles from "./Footer.module.css"
import { useContext } from "react";
const Footer = () => {
  const toDoContextData = useContext(toDoContext)
  const {isLightTheme} = toDoContextData
  return (
 <>
    <header className = {isLightTheme.lightTheme ? styles.footer : styles.footerDark}>
        <img src={logo} className = {styles.logo} alt="logo" />
    </header>
</>
  )
}

export default Footer