import React, { Component } from 'react';
import { Route,} from 'react-router-dom'





class Child extends Component{

    componentDidMount(){
        console.log(this);
    }
    render(){
        return(
            <div>
                Child   {this.props.match.params.id}
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (

              //路由传参
               <Route path='/:id' exact component ={Child}></Route>
            
        );
    }
}

export default App;