import { useContext } from "react"
import styles from "./List.module.css"
import {toDoContext} from "../../App"
const List = () => {
const toDoContextData = useContext(toDoContext)
const {state, setState} = toDoContextData
function deleteTodo() {
  console.log("deleteTodo")
}
function doneTodo() {
  console.log("doneTodo")
}
  return (
    <div className={styles.toDoList}>
    {state.map((toDoitem)=>{
        return (
            <div className={styles.toDoItem} key={toDoitem.id}>{toDoitem.text}
            <div>
                <button className="doneBtn" onClick={()=>{doneTodo()}}>done</button>
                <button className="deleteBtn" onClick={()=>{deleteTodo()}}>delete</button>
            </div>
        </div>
        )
    })}
    </div>
  )
}

export default List