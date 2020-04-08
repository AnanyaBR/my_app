import React from 'react'
import {connect} from 'react-redux'
import {startGetPosts} from './actions/postAction'
import {Link} from 'react-router-dom'


class PostsList extends React.Component{
    componentDidMount(){
        if(this.props.posts.length == 0){
            this.props.dispatch(startGetPosts())
        }
    }

    render(){
        return(
            <div>
                <h1>Post- {this.props.posts.length}</h1>
                <ul>
                    {
                    this.props.posts.map(post=>{
                        return(
                        <li key={post.id}><Link to={`/posts/${post.id}`}>userId-{post.userId}-Id-{post.id}-title-{post.title}</Link></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(PostsList)