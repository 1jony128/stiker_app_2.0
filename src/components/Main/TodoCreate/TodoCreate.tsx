import React, {useState} from 'react';
import {Box, Button, Container} from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import {useDispatch} from "react-redux";
import {addTodoAction, openAddTodoAction} from "../../../store/action-creators/todo-action";
import {TodoState} from "../../../types/todo-type";
import Fields from "./Fields";



const TodoCreate = () => {

    const [todo, setTodo] = useState({content: "", description: "", categories: ""})
    const dispatch = useDispatch();

    const onCreate = () => {
        console.log(todo)
        if((todo.content && todo.categories) != ""){
            const newTodo: TodoState = {
                id: Number((new Date()).getTime()),
                content: todo.content,
                checked: false,
                description: todo.description,
                categories: todo.categories,
                parent_id: undefined,
                project_id: 0
            }
            dispatch(addTodoAction(newTodo))
            dispatch(openAddTodoAction(false))
        }
        
    }

    const onCLose = () => {
        dispatch(openAddTodoAction(false))
    }



    return (
        <div className={"todo-create"}>
            <div className={"button right"}>
                <button onClick={onCLose}>Назад <CancelIcon /></button>
            </div>
            <h2>Создание новой задачи</h2>
            <Fields
                setTodo={setTodo}
                todo={todo}
            />
            <button
                onClick={onCreate}
            >
                Создать задачу</button>
        </div>
    );
};

export default TodoCreate;