import React from 'react';
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import BtnCreateTodo from "./BtnCreateTodo";
import TodoList from "./TodoList";

const TodoListContainer = () => {
    const { todos } = useTypedSelector(state => state.todos)

    return (
        <>
            <BtnCreateTodo />
            <TodoList todos={todos} />

        </>
    );
};

export default TodoListContainer;