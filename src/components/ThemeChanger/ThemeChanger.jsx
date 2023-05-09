import styles from "./ThemeChanger.module.css"
const ThemeChanger = () => {
  return (
    <div className={styles.themeChanger}>
        <button className={styles.themeChangerBtnLight}>
            Light
        </button>
        <button className={styles.themeChangerBtnDark}>
            Dark
        </button>
        </div>
  )
}

export default ThemeChanger