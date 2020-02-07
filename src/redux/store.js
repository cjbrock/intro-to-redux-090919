import { createStore } from 'redux'

const todos = [
    { id: 1, name: "write blog post", complete: true},
    { id: 2, name: "study for project review", complete: false}, 
    { id: 3, name: "make coffee", complete: true},
    { id: 4, name: "drink coffee", complete: false}, 
    { id: 5, name: "pass project review", complete: true},
    { id: 6, name: " get job", complete: false}
  ]

function todosReducer(state = todos, action) {
    switch (action.type) {
      case 'COMPLETE_TODO':
        //   do whatever we need to do to update the action that is dispatched
        // const todoUpdate = state.find(todo => todo.id == action.payload)
        // todoUpdate.complete = true
        // return state
        const newState = state.map(todo => todo.id == action.payload ? { ...todo, complete: true } : todo )
        return newState

      default:
        return state
    }
  }

let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store