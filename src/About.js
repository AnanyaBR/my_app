import React from 'react'
import {increment, decrement, reset} from './actions/countAction'
import {connect} from 'react-redux'

function About(props){
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
            <h2>About us{props.count}</h2>
            <p>lorem ipsum</p>
            <button onClick = {handleClick}>+</button>  
             <button onClick = {handleClick1} >-</button>
            <button onClick = {handleClick2} >0</button> 
        </div>
    )
}

const mapStateToProps =(state)=>{
    return {
        count : state.count
    }
    }

export default connect(mapStateToProps)(About)