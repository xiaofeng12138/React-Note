import React, { Component } from 'react';
import hoc from './hoc'




//装饰器
@hoc

class App extends Component {


    componentDidMount(){
        console.log(this);
    }
    render() {
        return (
            <div>
                hello
            </div>
        );
    }
}


//装饰器写法
export default App;


// 写法一
// export default hoc(App);