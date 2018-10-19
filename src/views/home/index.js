import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import ReactEcharts from 'echarts-for-react';
import themeLight from './themeLight'
// import echarts from 'echarts'
import echarts from 'echarts/lib/echarts'
// 引入饼图和折线图
import 'echarts/lib/chart/line'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/markPoint';

class Home extends Component {

  componentWillMount() {
    echarts.registerTheme('theme', themeLight);
  }

  getOption1() {
    let option = {
      // title: {
      //   text: '用户骑行订单'
      // },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['OFO订单量', '摩拜订单量']
      },
      xAxis: {
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'OFO订单量',
          type: 'line',
          stack: '总量',
          data: [
            1200,
            3000,
            4500,
            6000,
            8000,
            12000,
            20000
          ]
        },
        {
          name: '摩拜订单量',
          type: 'line',
          stack: '总量',
          data: [
            1000,
            2000,
            5500,
            6000,
            8000,
            10000,
            12000
          ]
        },
      ]
    }
    return option;
  }

  getOption2() {
    let option = {
      // title: {
      //   text: '用户骑行订单',
      //   x: 'center'
      // },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 20,
        bottom: 20,
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      series: [
        {
          name: '订单量',
          type: 'pie',
          radius: '55%',
          center: [
            '50%', '50%'
          ],
          data: [
            {
              value: 1000,
              name: '周一'
            }, {
              value: 1000,
              name: '周二'
            }, {
              value: 2000,
              name: '周三'
            }, {
              value: 1500,
              name: '周四'
            }, {
              value: 3000,
              name: '周五'
            }, {
              value: 2000,
              name: '周六'
            }, {
              value: 1200,
              name: '周日'
            }
          ].sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
    return option;
  }

  getOption3() {
    let option = {
      // title: {
      //   text: '用户骑行订单'
      // },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['OFO', '摩拜', '小蓝']
      },
      xAxis: {
        data: [
          '周一',
          '周二',
          '周三',
          '周四',
          '周五',
          '周六',
          '周日'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: 'OFO',
          type: 'bar',
          data: [
            2000,
            3000,
            5500,
            7000,
            8000,
            12000,
            20000
          ]
        },
        {
          name: '摩拜',
          type: 'bar',
          data: [
            1500,
            3000,
            4500,
            6000,
            8000,
            10000,
            15000
          ]
        },
        {
          name: '小蓝',
          type: 'bar',
          data: [
            1000,
            2000,
            2500,
            4000,
            6000,
            7000,
            8000
          ]
        },
      ]
    }
    return option;
  }

  render() {
    return (
      <div style={{ padding: '30px' }}>
        <Card style={{ marginBottom: 10 }}>
          <ReactEcharts
            option={this.getOption1()}
            theme="theme"
            notMerge={true}
            lazyUpdate={true}
            style={{ height: 300 }} />
        </Card>
        <Row gutter={16}>
          <Col span={12}>
            <Card>
              <ReactEcharts
                option={this.getOption2()}
                theme="theme"
                notMerge={true}
                lazyUpdate={true}
                style={{ height: 300 }} />
            </Card>
          </Col>
          <Col span={12}>
            <Card>
              <ReactEcharts option={this.getOption3()} theme="theme" notMerge={true} lazyUpdate={true} style={{ height: 300 }} />
            </Card>
          </Col>
        </Row>
      </div >
    );
  };
};

export default Home;