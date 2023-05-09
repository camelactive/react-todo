import { useContext } from "react"
import styles from "./List.module.css"
import {toDoContext} from "../../App"
const List = () => {
const toDoContextData = useContext(toDoContext)
const {state,setState} = toDoContextData
  return (
    <div className={styles.toDoList}>
    {state.map((toDoitem)=>{
        return (
            <div className={styles.toDoItem} key={Math.random()*1000}>{toDoitem.text}
            <div>
                <button className="doneBtn">done</button>
                <button className="deleteBtn">delete</button>
            </div>
        </div>
        )
    })}
    </div>
  )
}

export default List