import logo from "../../todolist-logo.png";
import styles from "./Footer.module.css"
import { useSelector } from "react-redux";

const Footer = () => {
  const {theme} = useSelector(state => state.todo)

  return (
 <>
    <header className = {theme.lightTheme ? styles.footer : styles.footerDark}>
        <img src={logo} className = {styles.logo} alt="logo" />
    </header>
</>
  )
}

export default Footer