import React, {Fragment} from "react"

import {DivCom} from './styled'

class Header extends  React.Component{
    render(){
        return(
            <div>header</div>
        )
    }
}

class Content extends  React.Component{
    render(){
        return(
            <div>Content</div>
        )
    }
}


export default class App extends  React.Component{
    render(){
        return(

           < Fragment>
                <Header />
                <Content />
                <DivCom>
                    晓风
                </DivCom>

           </ Fragment>
           
        )
    }
}
