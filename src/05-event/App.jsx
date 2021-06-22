import React, { Component } from 'react';

class App extends Component {

    constructor(props){
        super(props)
        this.handerClick = this.handerClick.bind(this)
        this.state ={
           count:0
        }
    }

    // handerClick(e){
    //     console.log(this.state.count);
    // }

    //函数柯里化
    handerClick =(args)=>{
        return ()=>{
            console.log(args);
            console.log(this.state.count);
        }
    }
    render() {
        return (
            <div>
                <h1>Event事件</h1>

                {/* <button onClick={this.handerClick}>Click</button> */}


                <button onClick={this.handerClick('xiaofeng')}>Click</button>

            </div>
        );
    }
}

export default App;