
import React ,{useRef}from 'react'

// export default function UseRef() {

//     const btn = useRef()

//     function handerClick(){
//         console.log(btn.current);
//     }
//     return (
//         <div>
//             <h1>UseRef基础用法</h1>
//             <button ref={btn} onClick= {handerClick}>按钮</button>

//         </div>
//     )
// }


export default function UseRef(){

    const count = useRef(0)
    const handerClick  =(num)=>{
        count.current += num
        setTimeout(() => {
            console.log('count:',count.current);
        }, 3000);
    }
    return (
                <div>
                    <h1>UseRef高级用法:React Hooks 中存在 Capture Value 的特性</h1>
                    <span>你点击了{count.current}次数</span>
                    <button onClick= {()=>handerClick(1)}>增加</button>
                    <button onClick= {()=>handerClick(-1)}>减少</button>
        
                </div>
            )

}
