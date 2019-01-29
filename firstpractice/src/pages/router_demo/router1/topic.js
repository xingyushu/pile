import React from 'react'
import  {HashRouter,Route,Link,Switch}  from 'react-router-dom'
import Rendering from './rendering'
import Components  from './components'
export default class  Tpoic  extends React.Component{
    render(){
        return(
         <HashRouter>
            <div>
                <p>this is the topic page</p>
            
                    <ul>
                    <li>
                    <Link to='/rendering'>Rendering with React</Link>
                    </li>
                    <li>
                    <Link to='/components'>Components</Link>
                    </li>
 
                </ul>
                <Switch>
                 
                        <Route path="/rendering" component={Rendering} />
                        <Route path="/components" component={Components} />
                   
                </Switch>
                      {this.props.children}
          </div>
        </HashRouter>
        );

    }
}