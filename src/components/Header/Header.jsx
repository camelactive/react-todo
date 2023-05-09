import logo from "../../todolist-logo.png";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import styles from "./Header.module.css"
const Header = () => {
  return (
 <>
    <header className = {styles.header}>
        <img src={logo} className = {styles.logo} alt="logo" />
        <ThemeChanger/>
    </header>
</>
  )
}

export default Header