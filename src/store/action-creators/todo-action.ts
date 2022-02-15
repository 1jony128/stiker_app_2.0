import {TodoActionTypes, TodoState} from "../../types/todo-type";

export const getTodoAction = (payload: TodoState[]) => ({type: TodoActionTypes.GET_TODOS, payload});
export const addTodoAction = (payload: TodoState) => ({type: TodoActionTypes.ADD_TODO, payload});
export const openAddTodoAction = (payload: boolean) => ({type: TodoActionTypes.OPEN_ADD_TODO, payload});
export const deleteTodoAction = (payload: number) => ({type: TodoActionTypes.ADD_TODO, payload});
export const updateTodoAction = (payload: TodoState) => ({type: TodoActionTypes.ADD_TODO, payload});