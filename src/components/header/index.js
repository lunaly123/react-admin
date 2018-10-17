import React, { Component } from 'react'
import { Row, Col } from "antd"
import './index.less'
import Util from 'utils/utils';

export default class Header extends Component {

  componentWillMount() {
    this.setState({
      userName: '河畔一角'
    });
    setInterval(()=>{
      let nowDate = Util.formateDate(new Date().getTime());
      this.setState({
        nowDate
      })
    },1000)
  }

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，{this.state.userName}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.nowDate}</span>
            <span className="weather-detail">
              天气
            </span>
          </Col>
        </Row>
      </div>
    )
  }
}
