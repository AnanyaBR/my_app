const userInitialState=[]

const usersReducer = (state=userInitialState, action)=>{
    switch(action.type){
        case 'SET_USERS' :{
            return [].concat(action.payload)
        }
        default:{
            //return [...state]
            return [].concat(state)
        }
    }
}

export default usersReducer