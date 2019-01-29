import React from 'react'
import {HashRouter,Route}  from 'react-router-dom'
// import App  from './App'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
export default class  IRouter  extends  React.Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route  path="/admin/ui/buttons"  component={Buttons}/>
                        </Admin>

                    }/>
                    <Route  path="/order/detail"  component={Login}/>
                </div>
                
            </HashRouter>

        );

    }
}