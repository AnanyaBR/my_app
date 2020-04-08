const todoInitialState = []

const todosReducer = (state = todoInitialState, action)=>{
switch(action.type){
    
        case 'SET_TODO' :{
            return [].concat(action.payload)

        }
        default : {
        return [].concat(state)
    }

}
}


export default todosReducer