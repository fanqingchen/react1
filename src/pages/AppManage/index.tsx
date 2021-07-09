import React, { Component } from 'react'
// 引入路由
import { Route,Switch } from "react-router-dom";
// 引入组件
import appManageList from "./pages/appManageList";
import appManageAdd from "./pages/appManageAdd";

export default class appManage extends Component {
  render() {
    return (
      <div className="appManage-main">
          <Switch >
            <Route exact path='/app-publish/app-manage/add' component={appManageAdd}></Route>
            <Route path='/app-publish/app-manage' component={appManageList}></Route>
        </Switch>
      </div>
      
    )
  }
}
