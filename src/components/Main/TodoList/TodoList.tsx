import React, {FC} from 'react';
import Category from "./Category";
import Todo from "./Todo";
import {TodoState} from "../../../types/todo-type";
interface ITodoList {
    todos: TodoState[]
}
const TodoList: FC<ITodoList> = ({todos}) => {

    const todoCategory = () => {

    }


    return (
        <div className={"carts-container"}>
            <Category todos={todos} />
        </div>
    );
};

export default TodoList;