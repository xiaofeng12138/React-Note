import React, { Component } from 'react';

class Child extends Component {

    constructor(props){
        super(props)
        this.state ={}
    }


    UNSAFE_componentWillReceiveProps(nextPros){
        console.log(nextPros);
    }

    
    //组件是否更新 返回一个布尔值
    shouldComponentUpdate(nextPros,nextState){
        console.log(nextPros);
        console.log(nextState);
        return true
    }


    render() {
        console.log('child render');
        return (
            <div>
                子组件
            </div>
        );
    }
}

export default Child;
