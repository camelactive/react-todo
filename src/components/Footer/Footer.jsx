import logo from "../../todolist-logo.png";
import styles from "./Footer.module.css"
import { useSelector } from "react-redux";
import info from "../../static/info"

const Footer = () => {
  const {theme} = useSelector(state => state.todo)

  return (
 <>
    <footer className = {theme.lightTheme ? styles.footer : styles.footerDark}>
        <img src={logo} className = {styles.logo} alt="logo" />
        <span className={styles.info}>{info}</span>
    </footer>
</>
  )
}

export default Footer