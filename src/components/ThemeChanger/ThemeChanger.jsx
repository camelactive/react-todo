import styles from "./ThemeChanger.module.css"
import {useSelector, useDispatch} from "react-redux"
import {themeChangerAction} from "../../store/todoSlice"

const ThemeChanger = () => {
  const {theme} = useSelector(state => state.todo)
  const dispatch = useDispatch()
  const themeChanger =() => {dispatch(themeChangerAction())}
  return (
    <div className={styles.themeChanger}>
        <button className={theme.lightTheme ? styles.themeChangerBtnLight :styles.themeChangerBtnDark} onClick={themeChanger}>
           {theme.text}
        </button>
        </div>
  )
}

export default ThemeChanger