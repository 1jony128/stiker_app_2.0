import {ActionType, TodoActionTypes, TodosState, TodoState} from "../../types/todo-type";


const initialState: TodosState = {
    todos: [],
    newTodo: false,
    updateTodo: false
}

const updateTodo = (todos: TodoState[], currentTodo: TodoState) => {
    return todos.map(todo => {
        if(todo.id === currentTodo.id){
            return currentTodo
        } else {
            return todo
        }
    })
}


export const todoReducer = (state = initialState, action:ActionType):TodosState => {
    switch (action.type) {
        case TodoActionTypes.GET_TODOS:
            return {...state, todos: action.payload}
        case TodoActionTypes.GET_MANY_TODOS:
            return {...state, todos: action.payload.todos, newTodo: action.payload.newTodo, updateTodo: action.payload.updateTodo}
        case TodoActionTypes.ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case TodoActionTypes.DELETE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case TodoActionTypes.UPDATE_TODO:
            return {...state, todos: updateTodo(state.todos, action.payload)}
        case TodoActionTypes.OPEN_ADD_TODO:
            return {...state, todos: [...state.todos], newTodo: action.payload}
        default:
            return state
    }
}
