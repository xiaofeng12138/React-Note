import React, { Component,Fragment } from 'react';
import { CountConsumer } from './Count';
class ChildHook extends Component {
    render() {
        return (
            <div>
                   <CountConsumer>
                       {
                           ({count,increment,decrement})=>{
                               return (
                                   <Fragment>
                                        <div>
                                          <button onClick = {()=>decrement(1) }>-</button>
                                       </div>
                                        <div>{count}</div>
                                        <div>
                                          <button onClick = {()=>increment(3) }>+</button>
                                       </div>

                                   </Fragment>
                                  
                               )
                           }
                       }
                   </CountConsumer>
            </div>
        );
    }
}

export default ChildHook;