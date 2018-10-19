import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import menuList from './config';

export default class Routes extends Component {

  componentWillMount() {
    const r = this.renderRoute(menuList);
    this.setState({
      r
    })
  }

  renderRoute = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (this.renderRoute(item.children))
      } else {
        return (
          <Route
            key={item.path}
            path={item.path}
            component={item.component}
          ></Route>
        )
      }

    })
  }

  render() {
    return (
      <Switch>
        {this.state.r}
        <Redirect to="/home" />
      </Switch>
    )
  }
}
