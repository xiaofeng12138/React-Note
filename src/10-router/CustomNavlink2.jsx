import React, { Component, } from 'react';
import { Route,NavLink, } from 'react-router-dom'
import './styles.css'

const Home = () =>(<div>HOME</div>)
const About = () =>(<div>About</div>)



/**
 * 
 * render 和 children 只能渲染 函数式组件  直接使用类组件 会报错
 * 
 * 
*/
class New extends Component{
    render(){
        return(
            <div>新闻</div>
        )
    }
}

class App extends Component {
    render() {
        return (
           <div>
               <h1>Nesting使用 路由嵌套</h1>
               <ul>
                   <li><NavLink activeClassName="xf" exact to='/'>Home</NavLink></li>
                   <li><NavLink activeClassName="xf" to='/about'>about</NavLink></li>
                   <li><NavLink activeClassName="xf" to='/news'>News</NavLink></li>
               </ul>
                <Route path ="/about" component ={About}></Route>
                <Route path ="/news" children = {(props)=>(<New {...props}></New>)}></Route>
                <Route path ="/" exact component ={Home}></Route>
        
           </div>
            
        );
    }
}

export default App;