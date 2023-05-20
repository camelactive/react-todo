import logo from "../../todolist-logo.png";
import ThemeChanger from "../ThemeChanger/ThemeChanger";
import styles from "./Header.module.css"
import { useSelector } from "react-redux";
const Header = () => {
  const {theme} = useSelector(state => state.todo)
  return (
 <>
    <header className = {theme.lightTheme ? styles.header : styles.headerDark}>
        <img src={logo} className = {styles.logo} alt="logo" />
        <ThemeChanger/>
    </header>
</>
  )
}

export default Header