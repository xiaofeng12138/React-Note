import React, { Component,createRef } from 'react';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            textValue:'hello'
        }


        this.ipt = createRef()
    }

    handerChange(e){
        this.setState({
            textValue:e.target.value
        })
    }

    handerInput(e){
        console.log(e.target.value);
    }
    render() {
        const {textValue} = this.state
        return (
            <div>
              <h1>  受控组件与非受控组件</h1>

               {/* <input type="text" value ={textValue} onChange ={this.handerChange.bind(this)} /> */}


               <input type="text"  value ={textValue}  onInput={this.handerChange.bind(this)} ref={this.ipt} />

            </div>
        );
    }
}

export default App;