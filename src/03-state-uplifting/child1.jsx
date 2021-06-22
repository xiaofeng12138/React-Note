import React from "react"

export default (props)=>{
   return(
       <div onClick = {props.onReceiveData.bind(this,'aaaa')}>这是子组件1</div>
   )
}