import {createSlice} from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name : "todoSlice",
    initialState : {
        todos : [],
        theme : {
            lightTheme: true,
		    text: "light",
        }

    },
    reducers : {
        themeChangerAction (state ,actions){
            state.theme.lightTheme = !state.theme.lightTheme
            state.theme.text = state.theme.lightTheme ? "light" : "dark"
        },
        addTodoAction(state,action){
            if (action.payload.text) {
                state.todos.push(action.payload) 
            }
            else {
                alert("Нельзя добавить пустое поле задачи")
            }
        },
        deleteTodoAction(state, action){
             state.todos = state.todos.filter((todo,id)=> id !== action.payload.todoIndex)
        },
        doneTodoAction(state, action){
            // console.log(action.payload.todoIndex)
           state.todos.map((element,id)=>{
            if ( id === action.payload.todoIndex) {
               return element.isDone = !element.isDone
            }   
            else return element
            })
            }
    }
})

export const { themeChangerAction,addTodoAction, deleteTodoAction, doneTodoAction} = todoSlice.actions
export default todoSlice.reducer
