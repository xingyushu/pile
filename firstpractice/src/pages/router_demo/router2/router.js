import React from 'react'
import {HashRouter ,Route}  from 'react-router-dom'
// import Main  from './../router1/Main'
// import About from './../router1/about'
import Topic from './../router1/topic'
import  Home from './../router1/Home'
import Table from './../../ui/table'
import Tal from './../../ui/tal'
import NormalLoginForm from './../../login'
// import Topics  from './../router1/topics'
// import Buttons from './../../ui/buttons'
export default class IRouter extends React.Component{
    render(){
        return(
            <HashRouter>
                <Home>
                        <Route exact={true} path="/" component={Home} />
                        <Route path="/about" component={NormalLoginForm} />
                        <Route path="/topic" component={Topic} />
                        <Route path="/Main" component={Table} />            
                        <Route path="/topics" component={Tal} />
                        
                </Home>
             
            </HashRouter>
           
        );
    }
}



