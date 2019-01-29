import React from  'react'
// import  Col from 'antd/lib/col'
import Row  from 'antd/lib/row'
// import  Button from 'antd/lib/button'
// import Footer from './components/Footer'
import Header from './components/Header'
import NavLeft from './components/NavLeft'
import './style/common.less'
import IRouter from './pages/router_demo/router2/router'
// import { ROOT } from 'postcss-selector-parser';
import Buttons from './pages/ui/buttons'
import Module from './pages/ui/module'
// import Tal from './pages/ui/tal'
// import Table from './pages/ui/table'
export  default class Admin extends React.Component{

    render(){
        return (
            <Row className="container">
                {/* <Header>b</Header>
                <Footer>a</Footer> */}
                <NavLeft/>
                <Header/>
                <Buttons/>
                <IRouter/>
                <Module/>
                {/* <Table/> */}
                {/* <Tal/> */}
                <Row className="content">
                    {this.props.children}    
                </Row>
        
            </Row>
                
            
        );

    }
}