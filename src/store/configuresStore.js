import {createStore, combineReducers, applyMiddleware} from 'redux'
import countReducer from '../reducers/countReducer'
//npm install redux-thunk
import thunk from 'redux-thunk'
import usersReducer from '../reducers/usersReducer'
import postsReducer from '../reducers/postsReducer'
import todosReducer from '../reducers/todosReducer'

const configureStore =()=>{
    const store = createStore(combineReducers({
        count:countReducer,
        users:usersReducer,
        posts:postsReducer,
        todos:todosReducer
    }),applyMiddleware(thunk))
    return store

}

export default configureStore