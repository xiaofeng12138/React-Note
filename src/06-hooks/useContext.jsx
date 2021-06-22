import React ,{useContext,createContext}from 'react'


let nameContext = createContext({name:'xiaofeng'})
let ageContext = createContext({age:12})


export default function UseContext() {

    let name = useContext(nameContext)
    let age = useContext(ageContext)
    return (
        <div>
            <h1>useContext用法</h1>
            {name.name} {age.age}
        </div>
    )
}
