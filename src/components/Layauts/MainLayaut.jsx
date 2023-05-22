import { Outlet } from "react-router-dom"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from "./MainLayaut.module.css"
import { useSelector } from "react-redux"

const MainLayaut = () => {
    const {theme} = useSelector(state => state.todo)
  return (
    <div className={theme.lightTheme ? styles.MainLayaut : styles.MainLayautDark}>
        <Header />
        <Outlet/>
        <Footer />
    </div>
  )
}

export default MainLayaut