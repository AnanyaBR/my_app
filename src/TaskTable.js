import React from 'react'

function TaskTable(props){
    return(
<table border = "1">
            <thead>
            <tr>
            <th>#</th>
            <th>title</th>
            <th>Completed</th>
            </tr>
            </thead>
            <tbody>{
                props.tasks.map(function(ele){
                    return (
                        <tr key= {ele.id}>
                          <td>{ele.id}</td>
                        <td>{ele.title}</td>
                        <td><input type= 'checkbox' 
                          // defaultChecked ={ele.completed} // to remove the warning from console
                          checked ={ele.completed}/>{ele.completed ? 'completed': 'Ongoing'}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>
    )

}
export default TaskTable

