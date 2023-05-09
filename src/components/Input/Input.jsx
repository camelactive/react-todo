import { useContext, useRef, useState } from "react"
import {toDoContext} from "../../App"
import styles from "./Input.module.css"
const Input = () => {
    const toDoContextData = useContext(toDoContext)
    const {state,setState} = toDoContextData
    const [stateInput, setStateInput] = useState("")
    function addTodo() {
        if (stateInput) {
            console.log(state)
            setState([...state,{text:stateInput}])
            setStateInput("")
        }
        else{
            alert("Нельзя добавить пустое поле задачи")
        }
  
    
    }
    
  return (
    <div className={styles.inputComponent}>
        <input className={styles.input} onChange={(event)=>{setStateInput(event.target.value)}} type="text" value={stateInput} placeholder="enter your to do"/>
        <button onClick={()=>{addTodo()}}>New to do</button>
    </div>
  )
}

export default Input