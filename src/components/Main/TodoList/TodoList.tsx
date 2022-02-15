import React, {FC} from 'react';
import Category from "./Category";
import Todo from "./Todo";
import {TodoState} from "../../../types/todo-type";
interface ITodoList {
    todos: TodoState[]
}
const TodoList: FC<ITodoList> = ({todos}) => {
    return (
        <div className={"carts-container"}>
            <Category todos={todos}>
                {
                    todos && todos.map((todo:TodoState) => {
                        return <Todo todo={todo}/>
                    })
                }
            </Category>
        </div>
    );
};

export default TodoList;