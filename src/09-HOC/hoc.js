import React, { Component } from 'react';


//高阶组件函数
const hoc = (Comp)=>{

    
  return class extends Component{

    componentDidMount(){
        console.log(this);
    }
      render(){
          return (
              <Comp title ="hello" {...this.props} ></Comp>
          )
      }
  }
}


export default hoc
