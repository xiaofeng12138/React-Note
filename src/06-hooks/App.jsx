import React, { useState, Fragment } from 'react';


import Effect from './effect'
import UseContext from './useContext'
import UseReducer from './useReducer'
import UseRef from './useRef'
import CusHooks from './customHooks'
export default function(props){
    let [count,setCount] = useState(0)

    function handerClick(){
        setCount((count)=>{
            return count + 1;
        })
    }

    return (
        <Fragment>
            <h1>React Hooks </h1>
            <span>{count}</span>
            <button onClick ={handerClick}>Click</button>
            <Effect />
            <UseContext />
            <UseReducer />
            <UseRef />
            <CusHooks />
        </Fragment> 
    )
}