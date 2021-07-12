
import React from 'react'
// 左边
import LeftNav from "./pages/left-nav/index";
// 右边
import Header from './pages/Header';
import { Layout} from 'antd';
// 引入路由部分
import { Switch, Route, Redirect,withRouter} from "react-router-dom";
// 引入自己写的数据
import menu from "./pages/left-nav/config/menuConfig.json";
// 引入路由组件
import {
  AppManage,
  AppPackage,
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
   const {breadcrumbArr}=this.state
    return (
      <Layout style={{ height: '100vh' }}>
        <LeftNav></LeftNav>
        <Layout className="site-layout main-all">
          <Content style={{ margin: '0 16px' }}>
            <Header  
            breadcrumb={breadcrumbArr}
            
            />
            <div className="context-style" style={{ padding: 24 }}>
              <Switch>
                <Redirect exact path="/" to='/home'></Redirect>
                <Route path="/home" component={Home}></Route>
                <Route path="/app-publish/app-manage" component={AppManage}></Route>
                <Route path="/app-publish/app-package" component={AppPackage}></Route>
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
        this.writeBreadcrumb(this.props)
      }
      // 面包屑导航
      writeBreadcrumb(props: any) {
          let arr: any[] = [];
          const pathname= props.history.location.pathname
          const pathname1=pathname.split("/")
          const pathname2=pathname1.splice(1,2)
          const count=pathname.split("/").length
          // 如果count为3则是2级路由 如果为4则是3级路由
        //遍历一级导航
        console.log(count,pathname,pathname1);
        
        if(count>3){
          const pathname3="/"+pathname2.join("/")
          menu.forEach(item => {
            //遍历二级导航
            if (item.children) {
              item.children.forEach((it:any)=> {
                if (it._key === pathname3) {
                  arr.push({
                    path: it._key,
                    name: it.title,
                    key: it._key
                  })
                }
              });
            }
          })
         if(pathname1[1]==="add"){
           console.log(1);
           
          arr.push({
            path: pathname,
            name: '添加',
            key: pathname,
          })
         }else if(pathname1[1]==="edit"){
          //  编辑
         }
        }else{
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
        }
        //遍历完后赋值
        this.setState({
          breadcrumbArr:arr
        })
    
      }
}
// @ts-ignore
export default withRouter(Layui)