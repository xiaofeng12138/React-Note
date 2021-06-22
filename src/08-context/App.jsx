import React, { Component } from 'react'
import { Consumer, Provider, testContext } from './context'

class ChildA extends Component {
  static contextType = testContext

  render() {
    console.log(this);
    return (
      <div>child a: {this.context}</div>
    )
  }
}

class ChildB extends Component {
  render() {
    return (
      <div>
        <ChildC></ChildC>
      </div>
    )
  }
}

const ChildD = function(props) {
  return (
    <div>ChildC
      <Consumer>
        {
          (value) => {
            return <div>{value}</div>
          }
        }
      </Consumer>
    </div>
  )
}

const ChildC = function(props) {
  return (
    <div>
      <ChildD></ChildD>
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <Provider value ="xiaofeng" >
        <ChildA></ChildA>
        <ChildB></ChildB>
      </Provider>
    )
  }
}