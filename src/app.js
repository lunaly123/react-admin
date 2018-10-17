import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from 'components/Header';
import Footer from 'components/footer';
import Nav from 'components/nav';

import './style/common.less'

class App extends Component {
  render() {
    return (
      <Row className="container">
        <Col span="4" className="nav">
          <Nav/>
        </Col>
        <Col span="20" className="main">
          <Header/>
          <Row className="content">
            {/* {this.props.children} */}
            content
          </Row>
          <Footer/>
        </Col>
      </Row>
    )
  }
}

export default App;