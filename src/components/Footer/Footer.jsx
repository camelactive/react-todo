import logo from "../../todolist-logo.png";
import styles from "./Footer.module.css"
const Footer = () => {
  return (
 <>
    <header className = {styles.footer}>
        <img src={logo} className = {styles.logo} alt="logo" />
    </header>
</>
  )
}

export default Footer