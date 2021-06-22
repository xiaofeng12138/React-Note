import React, { Component } from 'react';
import Child from './Child'
class App extends Component {
    constructor(props){
        super(props)
        this.state ={
            x:0
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                x:Math.random()
            })
        }, 2000);
    }


    render() {
        return (
            <div>
                <h1>React 生命周期</h1>
                <Child title={this.state.x} />
            </div>
        );
    }
}

export default App;