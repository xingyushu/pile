import React from 'react'
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';
import {Modal, Button,Spin,Card,Icon, notification, Progress,Popconfirm,Tabs,Timeline}   from 'antd'
const TabPane = Tabs.TabPane;
export default  class Module extends React.Component{

        state = { visible: false }

        showModal = () => {
            this.setState({
            visible: true,
            });
        }

        handleOk = (e) => {
            console.log(e);
            this.setState({
                visible: false,
            });
        }

        handleCancel = (e) => {
            console.log(e);
            this.setState({
                visible: false,
            });
        }

        openNotification=()=>{
            notification.success({
                message:"money transfer",
                description:"hello"
            });
        }

        callback=(key)=> {
            console.log(key);
        }

        render(){
            const icon= <Icon type="loading" style={{fontSize:24}}/>
            return(
              <div>
                  <Card>
                        <Spin size="small">hello</Spin>
                        <Spin />
                        <Spin size="large" />
                        <Spin indicator={icon} />
                  </Card>
                  <Button type="primary" onClick={this.openNotification}>notification </Button>
                  <Button type="primary" onClick={this.showModal}>Open Modal </Button>
                  <Progress percent={30} />
                  <Progress percent={70} status="exception" />
                  <Progress type="circle" percent={70} status="exception"/>
                  <Card>
                        <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                            <a href="http://www.baidu.com">Delete</a>
                        </Popconfirm>
                  </Card>
                  <Card>
                        <Tabs defaultActiveKey="1" onChange={this.callback} type="editable-card">
                                    <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                                    <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                                    <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
                         </Tabs>
                         <Timeline>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                        </Timeline>
                  </Card>

                    <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    </Modal>
              </div>
    


        );
     }
}