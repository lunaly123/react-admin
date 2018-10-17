import React, { Component } from 'react'
import { Menu } from 'antd'
import './index.less'
import Menuconfig from '../../config/menuConfig';

const SubMenu = Menu.SubMenu;

class Nav extends Component {
  
  componentWillMount() {
    const menuTreeNode = this.renderMenu(Menuconfig);
    this.setState({
      menuTreeNode
    })
  }
  
  renderMenu = (data) => {//渲染左侧导航
    return data.map((item)=>{
      if(item.children) {
        return (
          <SubMenu title={<span>{item.title}</span>} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.key}>{item.title}</Menu.Item>
    })
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
          <h1>antd-admin</h1>
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
export default Nav;