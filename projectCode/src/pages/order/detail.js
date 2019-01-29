import React from 'react';
import { Card } from 'antd'
import axios from '../../axios'
import './detail.less'
export default class Order extends React.Component {

    state = {}

    componentDidMount(){
        let orderId = this.props.match.params.orderId;
        if(orderId){
            this.getDetailInfo(orderId);
        }
    }

    getDetailInfo = (orderId)=>{
        axios.ajax({
            url:'/order/detail',
            data:{
                params:{
                    orderId: orderId
                }
            }
        }).then((res)=>{
            if(res.code ==0){
                this.setState({
                    orderInfo:res.result
                })
                this.renderMap(res.result);
            }
        })
    }

    renderMap = (result)=>{
        this.map = new window.BMap.Map('orderDetailMap');
        this.map.centerAndZoom('佛山',11);
        // 添加地图控件
        this.addMapControl();
        
        // 调用服务区绘制方法
        this.drwaServiceArea(result.area);

  
    }

    // 添加地图控件
    addMapControl = ()=>{
        let map = this.map;
        map.addControl(new window.BMap.ScaleControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT}));
        map.addControl(new window.BMap.NavigationControl({ anchor: window.BMAP_ANCHOR_TOP_RIGHT }));
    }



    // 绘制服务区
    drwaServiceArea = (positionList)=>{
        // 连接路线图
        let trackPoint = [];
        for (let i = 0; i < positionList.length; i++) {
            let point = positionList[i];
            trackPoint.push(new window.BMap.Point(point.lon, point.lat));
        }
        // 绘制服务区
        let polygon = new window.BMap.Polygon(trackPoint, {
            strokeColor: '#CE0000',
            strokeWeight: 4,
            strokeOpacity: 1,
            fillColor: '#ff8605',
            fillOpacity:0.4
        })
        this.map.addOverlay(polygon);
    }

    render(){
        const info = this.state.orderInfo || {};
        return (
            <div>
                <Card>
                    <div id="orderDetailMap" className="order-map"></div>
                    <div className="detail-items">
                        <div className="item-title">基础信息</div>
                        <ul className="detail-form">
                            <li>
                                <div className="detail-form-left">模式</div>
                                <div className="detail-form-content">{info.mode == 1 ?'服务区':'停车点'}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">订单编号</div>
                                <div className="detail-form-content">{info.order_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">充电桩编号</div>
                                <div className="detail-form-content">{info.bike_sn}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">用户姓名</div>
                                <div className="detail-form-content">{info.user_name}</div>
                            </li>
                            <li>
                                <div className="detail-form-left">手机号码</div>
                                <div className="detail-form-content">{info.mobile}</div>
                            </li>
                        </ul>
                    </div>
 
                </Card>
            </div>
        );
    }
}