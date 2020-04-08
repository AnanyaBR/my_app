//import react & react-dom
//html - <script src="./js"></script>

//es2015 module loader - react
//common js module loader - node + express

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configuresStore'
import {startGetUsers} from './actions/usersAction'
import { startGetPosts } from './actions/postAction'
import {startGetToDo} from './actions/todoAction'
//import {increment, decrement} from './actions/countAction'
const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

//store.dispatch(increment())
//store.dispatch(decrement())

//handle page reloads
store.dispatch(startGetUsers())
store.dispatch(startGetPosts())
store.dispatch(startGetToDo())

const jsx = (
    <Provider store={store}>
     <App />
    </Provider>
)
//const rootHandle = document.getElementById('root')
ReactDOM.render(jsx, document.getElementById('root') )