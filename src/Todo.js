import React from 'react'
import { connect } from 'react-redux'
import {startGetToDo} from './actions/todoAction'
import {Link} from 'react-router-dom'

class ToDo extends React.Component{
    componentDidMount(){
        if(this.props.todos.length == 0){
            this.props.dispatch(startGetToDo())
        }
    }

    render(){
        return(
            <div>
                <h1>Listing Todos -{this.props.todos.length}</h1>
                <ul>
                    {
                        this.props.todos.map(todo=>{
                        return <li key ={todo.id}><Link to={`/todos/${todo.id}`}>{todo.userId}-{todo.id}-{todo.title}-{`${todo.completed}`}</Link></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        todos : state.todos
    }
}


export default connect(mapStateToProps)(ToDo)