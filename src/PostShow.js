import React from 'react'
import {connect} from 'react-redux'


class PostShow extends React.Component{

    render(){
        //console.log(this.props.post)
        return(
            <div>{
                this.props.post ? (
                    <div>
    <h2>Post show -{this.props.match.params.id}</h2>
    <p>{this.props.post.userId} - {this.props.post.title}</p>
    </div> ) : (
             <p>Loading ...</p>
                )
                }

            </div>
        )
    }
}

const mapStateToProps =(state, props)=>{
    return{
        post: state.posts.find(post=>post.id == props.match.params.id)
    }
}

export default connect(mapStateToProps)(PostShow)