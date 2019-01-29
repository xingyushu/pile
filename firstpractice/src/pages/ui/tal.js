import React from 'react'
import { Table,Slider,Switch,DatePicker } from 'antd';
import './tal.less'
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
  }, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
  }];
  
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  }, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  }, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  }];
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
export default class Tal extends React.Component{
    state = {
        disabled: false,
    };
    
    handleDisabledChange = (disabled) => {
        this.setState({ disabled });
    }
    onChange=(a, b, c)=>{
        console.log(a, b, c);
    }
  

    onChange=(date, dateString)=>{
            console.log(date, dateString);
    }


     render(){
        const { disabled } = this.state;
        return(
            <div>
                    <Table dataSource={dataSource} columns={columns} /> 
                    <Slider defaultValue={30} disabled={disabled} />
                  <Slider range defaultValue={[20, 50]} disabled={disabled} />
                  Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
                  <DatePicker onChange={this.onChange} />
                    <br />
                    <MonthPicker onChange={this.onChange} placeholder="Select month" />
                    <br />
                    <RangePicker onChange={this.onChange} />
                    <br /> 
                   <WeekPicker onChange={this.onChange} placeholder="Select week" />
            </div>
        );

   }
}


