import React, {useEffect} from 'react';
import TodoListContainer from "./TodoList/TodoListContainer";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import TodoCreate from "./TodoCreate/TodoCreate";
import {getManyTodoAction} from "../../store/action-creators/todo-action";
import {TodosState} from "../../types/todo-type";
import {useDispatch} from "react-redux";
import axios from "axios";

const Main = () => {
      const { newTodo, todos, updateTodo } = useTypedSelector(state => state.todos);
      const dispatch = useDispatch()

    useEffect(() => {
        if(localStorage.getItem("todos")){
            let init = localStorage.getItem("todos")
            if(init){
               init = JSON.parse(init)

                const clone: TodosState = JSON.parse(JSON.stringify(init))
                console.log(clone)

                dispatch(getManyTodoAction(clone))
            }
        } else {
            axios("http://localhost:3000/todos",{
                method: "GET"
            }).then(data => {
                if(data.data){
                    const todosObject = {
                        todos: data.data[0],
                        newTodo,
                        updateTodo
                    }
                    localStorage.setItem("todos", JSON.stringify(todosObject))
                    dispatch(getManyTodoAction(todosObject))
                }
                return data
            })
        }

    },[])

    useEffect(() => {
        console.log(updateTodo)
        console.log(todos)
        if(todos && todos.length > 0){
            localStorage.setItem("todos", JSON.stringify({
                todos,
                newTodo,
                updateTodo
            }))
        }
    },[todos, updateTodo])

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