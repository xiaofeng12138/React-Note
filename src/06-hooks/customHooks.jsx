import React from 'react'
import useDataList from './cus'
export default function CustomHooks() {

    console.log(useDataList(1));
    return (
        <div>
            <h1>自定义Hooks</h1>
            
        </div>
    )
}
