const postInitialState = []

const postsReducer = (state=postInitialState, action)=>{
    switch(action.type){
      case 'SET_POST' : {
            return [].concat(action.payload)
        }
        default :{
            return [].concat(state)
        }
    }
}

export default postsReducer