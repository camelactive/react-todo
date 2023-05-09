import { useContext } from "react"
import styles from "./List.module.css"
import {toDoContext} from "../../App"
const List = () => {
const toDoContextData = useContext(toDoContext)
const {state, setState} = toDoContextData
function deleteTodo({todoIndex}) {

  setState(state.filter((todo,idx)=>idx !== todoIndex))
}
function doneTodo(todoIndex) {
  // console.log("doneTodo")
  // console.log(todoIndex)
}
  return (
    <div className={styles.toDoList}>
    {state.map((toDoitem, todoIndex)=>{
        return (
            <div className={styles.toDoItem} key={toDoitem.id}>{toDoitem.text}
            <div>
                <button className="doneBtn" onClick={()=>{doneTodo({todoIndex})}}>done</button>
                <button className="deleteBtn" onClick={()=>{deleteTodo({todoIndex})}}>delete</button>
            </div>
        </div>
        )
    })}
    </div>
  )
}

export default List