import axios from 'axios'

//sync

export const setToDo =(todos)=>{
    return{type: 'SET_TODO', payload: todos}
}

//async

export const startGetToDo =()=>{
    return(dispatch)=>{
axios.get('http://jsonplaceholder.typicode.com/todos/')
.then((response)=>{
   // console.log(response.data)
    const todos = response.data
    dispatch(setToDo(todos))
})

    }
}