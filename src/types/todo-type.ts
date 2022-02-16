
export enum TodoActionTypes {
    GET_TODOS = "GET_TODOS",
    GET_MANY_TODOS = "GET_MANY_TODOS",
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    UPDATE_TODO = "UPDATE_TODO",
    OPEN_ADD_TODO = "OPEN_ADD_TODO",
}

export interface TodosState {
    todos: TodoState[],
    newTodo: boolean,
    updateTodo: boolean
}

export interface TodoState {
    content: string;
    description: string;
    categories: string,
    id: number;
    parent_id?: number;
    project_id?: number;
    checked: boolean;
}


interface GetTodosAction {
    type: TodoActionTypes.GET_TODOS;
    payload: TodoState[];
}
interface GetManyTodoAction {
    type: TodoActionTypes.GET_MANY_TODOS;
    payload: TodosState;
}
interface AddTodoAction {
    type: TodoActionTypes.ADD_TODO;
    payload: TodoState;
}
interface DeleteTodosAction {
    type: TodoActionTypes.DELETE_TODO;
    payload: number;
}
interface UpgradeTodosAction {
    type: TodoActionTypes.UPDATE_TODO;
    payload: TodoState;
}
interface OpenAddTodosAction {
    type: TodoActionTypes.OPEN_ADD_TODO;
    payload: boolean;
}

export type ActionType = GetTodosAction | AddTodoAction | DeleteTodosAction | UpgradeTodosAction | OpenAddTodosAction | GetManyTodoAction