import React, { Component } from 'react'
import { Menu } from 'antd'
import './index.less'
import menuList from 'router/config';
import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

class Nav extends Component {
  state = {
    openKeys: [],
  };

  rootSubmenuKeys = menuList.map((item) =>{
    return item.path;
  })


  componentWillMount() {
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode
    })
  }
  
  renderMenu = (data) => {//渲染左侧导航
    return data.map((item)=>{
      if(item.children) {
        return (
          <SubMenu title={<span>{item.title}</span>} key={item.path}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item key={item.path}><NavLink to={item.path}>{item.title}</NavLink></Menu.Item>
    })
  }

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <div>
        <div className="logo">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
          <h1>AntD Admin</h1>
        </div>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          theme="dark"
        >
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
export default Nav;