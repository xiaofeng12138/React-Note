
import React  from 'react'
import ReactDom from 'react-dom'

// const App = (props)=>{
//     return <div> hello world {props.title} </div>
// }

// import App from './02-state/dataMounte'
// import App from './02-state/propsTypes'

// import App from './03-state-uplifting/parent'
// import App from './04 control-components/App'
// import App from './06-hooks/App'

// import App from './07-lifetimes/App'
// import App from './08-context/App'
import App from './08-context/count/App'

// class App extends  Component{

//     render(){
//         return (
//             <div>
//                 hello world
//             </div>
//         )
//     }
// }



ReactDom.render(
    <App />,
    document.getElementById('root')
)
