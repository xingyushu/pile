import React from  'react'
import MenuConfig  from "./../../config/menuConfig"
import { Menu } from 'antd';
import "./index.less"
// import {NavLink}  from 'react-router-dom'
const SubMenu = Menu.SubMenu;


export  default class NavLeft extends React.Component{
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);
        this.setState({
            menuTreeNode
        })
    }

    renderMenu =(data)=>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                    
                )
            }
            return  <Menu.Item title={item.title} key={item.key}>  </Menu.Item>
        })
    }
    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/favicon.ico" alt=""/>
                    <h2>system</h2>
                </div>
                <Menu theme="dark">
                    {this.state.menuTreeNode}
                </Menu>
 
            </div>
        );

    }
}