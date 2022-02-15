import React, {FC} from 'react';
import {ITodo} from "../TodoCreate/Fields";
import Checkbox from "../../UI/Checkbox/Checkbox";
import {TodoState} from "../../../types/todo-type";
interface ITodos {
    todo: TodoState
}

const Todo: FC<ITodos> = ({todo}) => {
    return (
        <div className={"cart-item"} key={todo.content}>
            <Checkbox todo={todo}/>
            <p>{todo.content}</p>
        </div>
    );
};

export default Todo;