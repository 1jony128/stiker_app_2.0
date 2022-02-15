import React, {FC, useState} from 'react'
import {TodoState} from "../../../types/todo-type";

interface ICheckbox {
    todo: TodoState
}

const Checkbox: FC<ICheckbox> = ({todo}) => {
    const [checked, setchecked] = useState(false);

    const onToggle = () => {
        setchecked(!checked)
    }

    return (
        <div className='squared-four'>
            <input type={"checkbox"} id={String(todo.id)}/>
            <label htmlFor={String(todo.id)} onClick={onToggle}/>
        </div>
    )
}

export default Checkbox
