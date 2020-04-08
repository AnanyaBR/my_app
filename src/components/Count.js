import React  from 'react'
import {connect} from 'react-redux'
import {increment, decrement, reset} from '../actions/countAction'

function Count (props){
    //console.log(props)

    const handleClick=()=>{
        props.dispatch(increment())
    }

    const handleClick1=()=>{
        props.dispatch(decrement())
    }

    const handleClick2=()=>{
        props.dispatch(reset())
    }

    return(
        <div>
            <h1>{props.count}</h1>
        <button onClick = {handleClick} >Up</button>
        <button onClick = {handleClick1} >Down</button>
        <button onClick = {handleClick2} >Reset</button>
        </div>

    )
}

const mapStateToProps =(state)=>{
return {
    count : state.count
}
}

// wrapped component
//const wrappedComponent = connect(mapStateToProps)(count)
//export default wrappedComponent

//higher order component and higher order function

export default connect(mapStateToProps)(Count)