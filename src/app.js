import React from 'react'
import ReactDom from 'react-dom'

import './index.css';
import './index.less';
import '../common/fonts/iconfont.css';

ReactDom.render(
  <div>
    <i className="iconfont icon-dianzan"></i>
    <h1>hello,world</h1>
  </div>,
  document.getElementById('app')
)