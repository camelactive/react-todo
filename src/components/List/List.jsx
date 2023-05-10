import { useContext } from "react"
import styles from "./List.module.css"
import {toDoContext} from "../../App"
const List = () => {
const toDoContextData = useContext(toDoContext)
const {state, setState} = toDoContextData
function deleteTodo({todoIndex}) {
  setState(state.filter((todo,idx)=>idx !== todoIndex))
}
function doneTodo({todoIndex}) {
  setState(state.map((todo,idx)=>{
    return idx === todoIndex ? {...todo, isDone : !todo.isDone} : {...todo}
  }))
}
  return (
    <div className={styles.toDoList}>
    {state.map((toDoitem, todoIndex)=>{
        return (
            <div className={toDoitem.isDone ? styles.toDoItem__done : styles.toDoItem} key={toDoitem.id}>{toDoitem.text}
            <div className={styles.toDoList__btns}>
                <button className={styles.doneBtn} onClick={()=>{doneTodo({todoIndex})}}>done</button>
                <button className={styles.deleteBtn} onClick={()=>{deleteTodo({todoIndex})}}>delete</button>
            </div>
        </div>
        )
    })}
    </div>
  )
}

export default List