import React from 'react'
import {Card,Button,Icon,Radio,Alert}  from 'antd'
const RadioGroup = Radio.Group;
const ButtonGroup = Button.Group;
export default class Buttons  extends React.Component{
    state = {
        value: 1,
        size:'default',
    }
    
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
    }
 
    handleChange=(e)=>{
        this.setState({
            size:e.target.value
        });
    }
    render(){
        return(
       
           <div>
                <Card title="button2">
                    <RadioGroup onChange={this.handleChange} value={this.state.size}>
                        <Radio value="small">A</Radio>
                        <Radio value="large">B</Radio>
                        <Radio value="default">C</Radio>
                     </RadioGroup>
                    <Button type="primary" shape="circle" loading={true} size={this.state.size}>shenzhen</Button>
                    <Button icon="plus"  size={this.state.size}>Guangzhou</Button>
                    <Button disabled size={this.state.size}>shanghai</Button>
                    <Icon type="check" />
                    <ButtonGroup>
                            <Button size={this.state.size}>L</Button>
                            <Button disabled>M</Button>
                            <Button disabled>R</Button>
                    </ButtonGroup>
                    <Alert message="Success Text" type="success" />

                </Card>
            </div>
          

        );

    }
}