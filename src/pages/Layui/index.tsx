
import React,{useState}from 'react'
// 左边
import LeftNav from "./components/left-nav/index";
// 右边
import Header from './components/Header';
import { Layout, Breadcrumb } from 'antd';
// 引入路由部分
import { Switch, Route, Redirect, Link ,withRouter} from "react-router-dom";
//ui
import { Menu, Dropdown, Button, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';
// 引入自己写的数据
import menu from "./components/left-nav/config/menuConfig.json";
// 引入路由组件
import {
  AppManage,
  Home
} from "../index";
const { Footer, Content } = Layout;

interface IProps {

}
interface IState {
  navigation: object,
  breadcrumbArr: any,
  openKeys: object[],
}
 class Layui extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      navigation: {},
      breadcrumbArr:[],
      openKeys: [],
    }
  }

  render() {
    
    console.log("props",this.props,this.state.breadcrumbArr);
   const {breadcrumbArr}=this.state
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <LeftNav></LeftNav>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>

            <Header  
            breadcrumb={breadcrumbArr}
            />

            <div className="context-style" style={{ padding: 24 }}>
              <Switch>
                <Redirect exact path="/" to='/home'></Redirect>
                <Route path="/home" component={Home}></Route>
                <Route path="/app-publish/app-manage" component={AppManage}></Route>
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>

    )
  }


      // 渲染完后
      componentDidMount() {
        this.setState({
          navigation: {
            // name: torage.get("name"),
            // path: storage.get("path")
          }
        });
        this.writeBreadcrumb(this.props)  //调用写的面包屑方法
      }
      //页面的地址更新后调用写面包屑的方法
      componentWillReceiveProps() {  
          console.log("this.props",this.props);
          
        this.writeBreadcrumb(this.props)
      }
      // 面包屑导航
      writeBreadcrumb(props: any) {
        let arr: any[] = [];
        console.log("pathname",props.location.pathname);
        
          let pathname= props.history.location.pathname
    
        //遍历一级导航
        menu.forEach(item => {
          //遍历二级导航
          if (item.children) {
            item.children.forEach((it:any)=> {
              if (it._key === pathname) {
                arr.push({
                  path: it._key,
                  name: it.title,
                  key: it._key
                })
              }
            });
          }
        })
        console.log("arr", arr);
        //遍历完后赋值
        this.setState({
          breadcrumbArr:arr
        },()=>{
          console.log("breadcrumbArr",this.state.breadcrumbArr);
          
        })
    
      }
}
// @ts-ignore
export default withRouter(Layui)