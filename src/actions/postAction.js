import axios from 'axios'

//sync
export const setPosts= (posts) =>{
    return {type:'SET_POST', payload: posts}
}

//async
export const startGetPosts=()=>{
    return (dispatch) => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            //console.log(response.data)
            const posts = response.data
            dispatch(setPosts(posts))
        })
        // .catch(err=>{
        //     console.log(err)
        // })
    }

}

