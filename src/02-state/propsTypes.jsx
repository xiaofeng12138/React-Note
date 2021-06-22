import React, { Component } from 'react';
import propsTypes from 'prop-types';


let {node}  = propsTypes
class Child extends Component {
   
    //校验传值的类型
    // static propsTypes = {
    //     title:node
    // }

    render(){
        return (
            <div>child组件内容 {this.props.title}</div>
        )
    }
}


export default  class extends Component {
    render() {
        return (
            <div>
                <Child title="hhh1" />
            </div>
        );
    }
}

Child.propsTypes = {
    title:node
}
