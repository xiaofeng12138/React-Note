import React, { Component } from 'react';
import ChildHook from './ChildHook';
import {CountConsumer} from './Count'
class Child extends Component {
    render() {
        return (
            <div>
                <CountConsumer>
                    {
                        ({count})=><div>{count}</div>
                    }
               </CountConsumer>
                <ChildHook />
            </div>
        );
    }
}

export default Child;