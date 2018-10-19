import Home from 'views/home';
import Buttons from 'views/ui/buttons';
import modals from 'views/ui/modals';
import loadings from 'views/ui/loadings';
import notice from 'views/ui/notice';
import messages from 'views/ui/messages';
import tabs from 'views/ui/tabs';
import Login from 'views/form/login';
import Register from 'views/form/register';
import BasicTable from 'views/table/basicTable';
import HighTable from 'views/table/highTable';
import Rich from 'views/rich';

const menuList = [
  {
    title: '首页',
    path: '/home',
    component: Home
  },
  {
    title: 'UI',
    path: '/ui',
    children: [
      {
        title: '按钮',
        path: '/ui/buttons',
        component: Buttons
      },
      {
        title: '弹框',
        path: '/ui/modals',
        component: modals
      },
      {
        title: 'Loading',
        path: '/ui/loadings',
        component: loadings
      },
      {
        title: '通知提醒',
        path: '/ui/notification',
        component: notice
      },
      {
        title: '全局Message',
        path: '/ui/messages',
        component: messages
      },
      {
        title: 'Tab页签',
        path: '/ui/tabs',
        component: tabs
      }
    ]
  },
  {
    title: '表单',
    path: '/form',
    children: [
      {
        title: '登录',
        path: '/form/login',
        component: Login
      },
      {
        title: '注册',
        path: '/form/register',
        component: Register
      }
    ]
  },
  {
    title: '表格',
    path: '/table',
    children: [
      {
        title: '基础表格',
        path: '/table/basic',
        component: BasicTable
      },
      {
        title: '高级表格',
        path: '/table/high',
        component: HighTable
      }
    ]
  },
  {
    title: '富文本',
    path: '/rich',
    component:Rich
  },
  {
    title: '城市管理',
    path: '/city'
  },
  {
    title: '订单管理',
    path: '/order',
    children: [
      {
        title: '订单详情',
        path: 'detail',
      },
      {
        title: '结束订单',
        path: 'finish',
      }
    ]
  },
  {
    title: '员工管理',
    path: '/user'
  },
  {
    title: '车辆地图',
    path: '/bikeMap'
  },
  // {
  //   title: '图标',
  //   path: '/charts',
  //   children: [
  //     {
  //       title: '柱形图',
  //       path: '/charts/bar',
  //     },
  //     {
  //       title: '饼图',
  //       path: '/charts/pie',
  //     },
  //     {
  //       title: '折线图',
  //       path: '/charts/line',
  //     },
  //   ]
  // },
  {
    title: '权限设置',
    path: '/permission'
  },
];
export default menuList;