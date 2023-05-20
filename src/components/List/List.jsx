import { useSelector, useDispatch} from "react-redux"
import {deleteTodoAction, doneTodoAction} from "../../store/todoSlice"
import styles from "./List.module.css"

const List = () => {
const dispatch = useDispatch()
const deleteToDoHandler = (todoIndex) =>{dispatch(deleteTodoAction({todoIndex}))}
const doneToDoHandler = (todoIndex) =>{dispatch(doneTodoAction({todoIndex}))}
const {todos} = useSelector(state => state.todo)
  return (
    <div className={styles.toDoList}>
    {todos.map((toDoitem, todoIndex)=>{
        return (
            <div className={toDoitem.isDone ? styles.toDoItem__done : styles.toDoItem} key={todoIndex}>{toDoitem.text}
            <div className={styles.toDoList__btns}>
                <button onClick={()=>deleteToDoHandler(todoIndex)}>delete</button>
                <button onClick={()=>doneToDoHandler(todoIndex)}>done</button>
            </div>
        </div>
        )
    })}
    </div>
  )
}

export default List