import React from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import TaskList from './TaskList'
import UsersList from './UsersLIst'
import UserShow from './UserShow'
import PostsList from './PostsList'
import PostShow from './PostShow'
import Todo from './Todo'
import Count from './components/Count'
//npm install react-router-dom
import {BrowserRouter, Route, Link} from 'react-router-dom'
import ToDoShow from './ToDoShow'


// import Greet from './Greeting'


//import the TaskList Component and embed inside the App component

function App(props){
    return(
        <BrowserRouter>
        <div>
            <h1>Hello React App!!!</h1>
            <Link to="/">Home</Link> |
            <Link to="/about">About</Link> |
            <Link to='/count'>Count</Link> |
            <Link to="/contact">Contact</Link> |
            <Link to="/tasklist">TaskList</Link> |
            <Link to="/userlist">UserList</Link> |
            <Link to="/postslist">PostsList</Link> |
            <Link to="/todo">ToDoList</Link>
           <Route path="/" component ={Home} exact={true}/>
           <Route path="/about" component={About} />
           <Route path="/contact" component ={Contact}/>
           <Route path="/tasklist" component ={TaskList}/>
           <Route path="/userlist" component={UsersList} exact={true}/>
           <Route path="/users/:id" component={UserShow}/>
           <Route path="/postslist" component={PostsList} />
           <Route path="/posts/:id" component={PostShow} />
           <Route path="/todo" component={Todo}/>
           <Route path="/todos/:id" component={ToDoShow}/>
            <Route path="/count" component={Count} />
           {/*<Greet/>
            <TaskList/>
            <UsersList/> 
            <Home/> 
            <About/>
           <Contact/>*/}
            
        </div>
        </BrowserRouter>
    )
}

export default App
