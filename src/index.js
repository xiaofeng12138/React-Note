
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
// import App from './08-context/count/App'
//  import App from './09-HOC/App'
// import App from './10-router/App'
// import App from './10-router/Nesting'
import App from './10-router/CustomNavlink'

// class App extends  Component{

//     render(){
//         return (
//             <div>
//                 hello world
//             </div>
//         )
//     }
// }


import {BrowserRouter as Router } from 'react-router-dom'

ReactDom.render(
    <Router>
       <App msg="world" />
    </Router>,
    document.getElementById('root')
)
