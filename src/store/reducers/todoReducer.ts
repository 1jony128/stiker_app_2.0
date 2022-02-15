import {ActionType, TodoActionTypes, TodosState} from "../../types/todo-type";


const initialState: TodosState = {
    todos: [
        {
            id: 1644919828471,
            content: 'Чарльз спреджен',
            checked: false,
            description: '...',
            categories: 'Список книг',
            project_id: 0
        },
        {
            id: 1644919843078,
            content: 'Бог всемогущий',
            checked: false,
            description: '..',
            categories: 'Список проповедей',
            project_id: 0
        },
        {
            id: 1644919861857,
            content: 'о React',
            checked: false,
            description: '...',
            categories: 'Список статей',
            project_id: 0
        }
    ],
    newTodo: false,
    updateTodo: false
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
        case TodoActionTypes.OPEN_ADD_TODO:
            return {...state, todos: [...state.todos], newTodo: action.payload}
        default:
            return state
    }
}
