import logo from "../../todolist-logo.png";
import { useSelector } from "react-redux";
import styles from "./Footer.module.css"
import { Link } from "react-router-dom";
const Footer = () => {
  const {theme} = useSelector(state => state.todo)

  return (
 <>
    <footer className = {theme.lightTheme ? styles.footer : styles.footerDark}>
        <img src={logo} className = {styles.logo} alt="logo" />
        <Link to="/info"> info </Link>
    </footer>
</>
  )
}

export default Footer