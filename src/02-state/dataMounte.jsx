import React, { Component } from 'react';
import Child from './child';

class DataMounted extends Component {
    render() {
        return (
            <div>
                我是父组件
                <Child title="333333" />
            </div>
        );
    }
}

export default DataMounted;