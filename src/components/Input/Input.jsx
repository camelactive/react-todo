import {  useState } from "react"
import styles from "./Input.module.css"
import {useDispatch} from "react-redux"
import { addTodoAction } from "../../store/todoSlice"
const Input = () => {
    const dispatch = useDispatch()
    const addToDoHandler = () => {
        dispatch(addTodoAction({text:stateInput, isDone:false}))
        setStateInput("")
    }

    const [stateInput, setStateInput] = useState("")

    function handleKeyPress (event){
        if(event.key === 'Enter'){

            addToDoHandler()
        }
      }
      
    
  return (
    <div className={styles.inputComponent} >
          <input className = {styles.input} onChange={(event)=>{setStateInput(event.target.value)}} onKeyDown={handleKeyPress} type="text" value={stateInput} placeholder="enter your to do"/>
        <button className = {styles.inputBtn} onClick={addToDoHandler}>New to do</button>
    </div>
  )
}

export default Input