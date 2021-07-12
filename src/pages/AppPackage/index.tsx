import React, { Component } from 'react'
// 引入路由
import { Route,Switch } from "react-router-dom";
// 引入组件
import appPackageAdd from "./pages/appPackageAdd";
import appPackageList from "./pages/appPackageList";

export default class AppPackage extends Component <any,any>{
  render() {
    return (
    
          <Switch >
            <Route  exact path='/app-publish/app-package/add' component={appPackageAdd}></Route>
            <Route path='/app-publish/app-package' component={appPackageList}></Route>
        </Switch>
 
      
    )
  }
}

  
