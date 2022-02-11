
export enum TodoActionTypes {
    GET_TODOS = "GET_TODOS",
    ADD_TODO = "ADD_TODO",
    DELETE_TODO = "DELETE_TODO",
    UPDATE_TODO = "UPDATE_TODO"
}

export interface TodosState {
    todos: TodoState[]
}

interface TodoState {
    content: string;
    description: string;
    id: number;
    parent_id?: number;
    project_id: number;
    checked: boolean;
}


interface GetTodosAction {
    type: TodoActionTypes.GET_TODOS;
    payload: TodoState[];
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

export type ActionType = GetTodosAction | AddTodoAction | DeleteTodosAction | UpgradeTodosAction