import React, {FC} from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Checkbox from "../../UI/Checkbox/Checkbox";
import {TodoState} from "../../../types/todo-type";
import {useDispatch} from "react-redux";
import {deleteTodoAction} from "../../../store/action-creators/todo-action";
interface ITodos {
    todo: TodoState
}

const Todo: FC<ITodos> = ({todo}) => {
    const dispatch = useDispatch()

    const deleteTodo = (id: number) => {
        dispatch(deleteTodoAction(id))
    }



    return (
        <div className={"cart-item"} key={todo.content}>
            <div className={`right ${todo.checked ? `through` : ""}`}>
                <Checkbox todo={todo}/>
                <p style={{}}>{todo.content}</p>
            </div>

            <DeleteOutlineIcon
                onClick={() => deleteTodo(todo.id)}
                className={"icon"}
            />
        </div>
    );
};

export default Todo;