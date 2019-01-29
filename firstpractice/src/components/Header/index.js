import React from  'react'
// import { Row } from 'antd';
import "./index.less"
import {Card,Button}  from 'antd'
export  default class Header extends React.Component{
    componentWillMount(){
        this.setState({
            userName:"Mike"
        })
    }
    render(){
        return (
        <div>
            <Card title="button1">

            <Button type="primary">Imooc</Button>
            <Button >beijing</Button>
            <Button type="dashed">shanghai</Button>
          </Card>
                    
        </div>
        );

    }
}