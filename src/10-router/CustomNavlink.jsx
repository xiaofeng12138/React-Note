import React, { Component, } from 'react';
import { Route,NavLink,Switch,withRouter } from 'react-router-dom'
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




@withRouter
class MyNavLink extends Component{

    state = {
       navData :[
           {id:'001',name:'home'},
           {id:'002',name:'about'},
           {id:'003',name:'news'},
           {id:'004',name:'edu'},
       ]
    }

    handerClick = (name)=>{
        let history = this.props.history
        return (e)=>{
            history.push('/'+ name)
        }
    }
    render(){
       let pathName = this.props.location.pathname
        return (
            <div>
                <>
                 {
                    this.state.navData.map(item=>{
                        let {id,name} = item
                        return <li key={id} onClick ={this.handerClick(name)}> {pathName === '/'+ name ? '>' :''}{name}</li>
                    }) 
                 }
                </>
            </div>
        )
    }
}

class Eduction extends Component{
    render(){
        return (
            <div>Education</div>
        )
    }
}

class App extends Component {
    render() {
        return (
           <div>
               <h1>Nesting使用 路由嵌套</h1>
               <ul>
                   {/* <li><NavLink activeClassName="xf" exact to='/'>Home</NavLink></li>
                   <li><NavLink activeClassName="xf" to='/about'>about</NavLink></li>
                   <li><NavLink activeClassName="xf" to='/news'>News</NavLink></li> */}
                   <MyNavLink />
               </ul>
               <Switch>
                    <Route path ="/about" component ={About}></Route>
                    <Route path ="/news" children = {(props)=>(<New {...props}></New>)}></Route>
                    <Route path ="/edu">
                        <Eduction />
                    </Route>
                    <Route path ="/" exact component ={Home}></Route>
                </Switch>
           </div>
            
        );
    }
}

export default App;