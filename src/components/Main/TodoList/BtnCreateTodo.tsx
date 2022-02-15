import React from 'react';
import {useDispatch} from "react-redux";
import {openAddTodoAction} from "../../../store/action-creators/todo-action";
import {Button} from "@mui/material";

const BtnCreateTodo = () => {
    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(openAddTodoAction(true))
    }
    return (
        <div className={"new-todo"}>
            <Button variant="text" onClick={onClick}>Новая задача</Button>
        </div>
    );
};

export default BtnCreateTodo;