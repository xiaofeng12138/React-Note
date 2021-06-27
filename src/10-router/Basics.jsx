import React, { Component } from 'react';
import {BrowserRouter as Router , Route,Link} from 'react-router-dom'



const Home = ()=>(<div>Home</div>)
const About = ()=>(<div>About</div>)
const New = ()=>(<div>New</div>)


class App extends Component {
    render() {
        return (
            <Router>

                <ul>
                    <li>
                        <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about">About</Link></li>
                    <li>
                        <Link to = "/new">New</Link></li>
                </ul>

               <Route path='/' exact component ={Home}>Home</Route>
               <Route path='/about'  component ={About}>About</Route>
               <Route path='/new'  component ={New}>New</Route>



            </Router>
            
        );
    }
}

export default App;