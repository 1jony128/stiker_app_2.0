import React from 'react';
import TodoListContainer from "./TodoList/TodoListContainer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TodoCreate from "./TodoCreate/TodoCreate";

const Main = () => {
      const { newTodo } = useTypedSelector(state => state.todos)
    return (
        <div className={"main"}>
            {
                !newTodo ?
                <TodoListContainer />
                :
                <TodoCreate />
            }
        </div>
    );
};

export default Main;