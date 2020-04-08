//create a class Component called as TaskList
//in state maintain 2 tasks information
//display the task in a table format
//export the component

import React from 'react'
import TaskTable from './TaskTable'


class TaskList extends React.Component{
    constructor(){
        super()
        this.state = {
            tasks: [
                {id:1, title: 'develop ui', completed: true},
                {id:2, title: 'develope app', completed: false},
                {id:3, title: 'take client features', completed: true}
            ]
        }
    }

    render(){
        return(
            <div>
            <h1>Listing Tasks -{this.state.tasks.length}</h1>
            <TaskTable tasks ={this.state.tasks} />
            
            </div>
        )
    }
}

export default TaskList