import React from 'react'
import {connect} from 'react-redux'

class ToDoShow extends React.Component{

    render(){
        return(
            <div>{
                this.props.todo ? (
                    <div>
                        <h2>ToDo Show - {this.props.match.params.id}</h2>
                <p>{this.props.todo.userId}-{this.props.todo.id}-{`${this.props.todo.completed}`}</p>
                    </div>
                ):(
                    <p>Loading ....</p>
                )
                
                
                }

            </div>
        )
    }
}

const mapStateToProps =(state, props)=>{
    return{
todo : state.todos.find(todo => todo.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(ToDoShow)