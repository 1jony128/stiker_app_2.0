import {TodoActionTypes, TodosState, TodoState} from "../../types/todo-type";

export const getTodoAction = (payload: TodoState[]) => ({type: TodoActionTypes.GET_TODOS, payload});
export const getManyTodoAction = (payload: TodosState) => ({type: TodoActionTypes.GET_MANY_TODOS, payload});
export const addTodoAction = (payload: TodoState) => ({type: TodoActionTypes.ADD_TODO, payload});
export const openAddTodoAction = (payload: boolean) => ({type: TodoActionTypes.OPEN_ADD_TODO, payload});
export const deleteTodoAction = (payload: number) => ({type: TodoActionTypes.DELETE_TODO, payload});
export const updateTodoAction = (payload: TodoState) => ({type: TodoActionTypes.UPDATE_TODO, payload});