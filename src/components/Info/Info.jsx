import { Link } from "react-router-dom"
import info from "../../static/info"
import styles from "./Info.module.css"
import { useSelector } from "react-redux"
const Info = () => {
const {theme} = useSelector(state => state.todo)
  return (
    <div className={theme.lightTheme ? styles.info: styles.infoDark}>
        <h1>Info</h1>
        <span>{info}</span>
        <Link to={"/"}>Back to Main</Link>
    </div>
  )
}

export default Info