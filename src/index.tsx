import React , { Suspense }from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import './style/index.scss'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
ReactDOM.render(
  // 使用的是路由懒加载，所以需要使用<Suspense>包起来
  <BrowserRouter>
  <Suspense fallback={<div></div>}>
          <Switch>
          <Route path="/" render={routerProps => {
             return <App {...routerProps}/> }}
             />
          </Switch>
  </Suspense>
  
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
