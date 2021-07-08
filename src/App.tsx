import React, { Component } from 'react'
import { Redirect, Route, Switch, withRouter } from 'react-router-dom'
import {    
  Layui,
  unFount404
} from "./pages/index";
  export default class App extends Component<any,any> {
    render(){
      return (
        <Switch>
        <Route path="/" component={ Layui }></Route>
        <Route  path="*" component={ unFount404 }></Route>
    </Switch>
  )
    }
       
}

