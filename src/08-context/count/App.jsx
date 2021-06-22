import React, { Component } from 'react'
import {CountProvider} from './Count'
import Child from './Child'
export default class App extends Component {
  render() {
    return (
       <div>
         <h1>组件之间通讯</h1>
         <CountProvider >
            <Child />
         </CountProvider>
       </div>
    )
  }
}