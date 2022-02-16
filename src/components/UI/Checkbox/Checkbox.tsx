import React, {FC, useEffect, useState} from 'react'
import {TodosState, TodoState} from "../../../types/todo-type";
import {useDispatch} from "react-redux";
import {getManyTodoAction, updateTodoAction} from "../../../store/action-creators/todo-action";

interface ICheckbox {
    todo: TodoState
}

const Checkbox: FC<ICheckbox> = ({todo}) => {
    const [checked, setchecked] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem("todos")){
            let init = localStorage.getItem("todos")
            if(init){
                init = JSON.parse(init)
                const clone: TodosState = JSON.parse(JSON.stringify(init))
                const currentTodo = clone.todos.find(item => item.id === todo.id)
                if(currentTodo && currentTodo.checked){
                    setchecked(true)
                }
            }
        }
    },[])

    const onToggle = () => {
        setchecked(!checked)
        const todoChecked = JSON.parse(JSON.stringify(todo))
        todoChecked.checked = !checked
        dispatch(updateTodoAction(todoChecked))

    }

    return (
        <div className='squared-four'>
            <input type={"checkbox"} id={String(todo.id)} checked={checked} onChange={onToggle}/>
            <label htmlFor={String(todo.id)}/>
        </div>
    )
}

export default Checkbox
