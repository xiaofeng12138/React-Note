import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';


//兄弟组件通讯

class Parent extends Component {
  state={
      msg:""
  }
    handerData(data){
       this.setState({
          msg:data
       })
    }
    render() {
        return (
            <div>
                <h1>兄弟组件传值</h1>
                <Child1 onReceiveData = {this.handerData.bind(this)} />
                <Child2 title={this.state.msg} />
            </div>
        );
    }
}

export default Parent;