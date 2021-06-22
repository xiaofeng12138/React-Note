import React, { Component } from 'react';

// class Child extends Component {

//     //静态属性
//     static defaultProps = {
//         title:"晓风哥哥"
//     }
    
//     render() {
//         return (
//             <div>
//                 我是子组件 {this.props.title}
//             </div>
//         );
//     }
// }


//函数式组件 无状态组件
const Child = function(props){
    return  <div>我是子组件 {props.title} </div>
}
Child.defaultProps ={
    title:"晓风哥哥"
}

export default Child;