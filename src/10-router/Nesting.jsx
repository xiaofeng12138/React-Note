import React, { Component,Fragment } from 'react';
import { Route,Link,Switch } from 'react-router-dom'


const Home = () =>(<div>HOME</div>)
const News1 = () =>(<div>News1</div>)
const News2 = () =>(<div>News2</div>)
const News3 = () =>(<div>News3</div>)


const News = (props) =>{
    const {url} = props.match
     return (
         <>
          <h2>News</h2>
          <hr />
            <ul>
                <li> <Link to={`${url}/news1`}>News1</Link></li>
                <li> <Link to={`${url}/news2`}>News2</Link></li>
                <li> <Link to={`${url}/news3`}>News3</Link></li>
            </ul>
          
            <Route path={`${url}/news1`} component ={News1}></Route>
            <Route path={`${url}/news2`} component ={News2}></Route>
            <Route path={`${url}/news3`} component ={News3}></Route>
         </>
        

     )
}

class App extends Component {
    render() {
        return (
           <div>
               <h1>Nesting使用 路由嵌套</h1>
               <ul>
                   <li><Link to='/'>Home</Link></li>
                   <li><Link to='/news/news1'>News</Link></li>
               </ul>
            <Switch>
              {/* 排他新路由 */}
                <Route path ="/news" component ={News}></Route>
                <Route path ="/" exact component ={Home}></Route>
            </Switch>
           </div>
            
        );
    }
}

export default App;