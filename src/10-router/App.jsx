import React, { Component,Fragment } from 'react';
import { Route } from 'react-router-dom'
import Nesting from './Nesting'





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

            <Fragment>

               <Route path='/:id' exact component ={Child}></Route>
               <Nesting />

               </Fragment>
            
        );
    }
}

export default App;