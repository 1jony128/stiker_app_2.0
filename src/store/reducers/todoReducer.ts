import {ActionType, TodoActionTypes, TodosState} from "../../types/todo";


const initialState: TodosState = {
    todos: []
}


export const todoReducer = (state = initialState, action:ActionType):TodosState => {
    switch (action.type) {
        case TodoActionTypes.GET_TODOS:
            return {...state, todos: action.payload}
        case TodoActionTypes.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case TodoActionTypes.DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case TodoActionTypes.UPDATE_TODO:
            return {...state, todos: [...state.todos.filter(todo => todo.id !== action.payload.id), action.payload]}
        default:
            return state
    }
}

export const getTodoAction = <GetTodosAction>(payload: ) => ({type: TodoActionTypes.GET_TODOS, })