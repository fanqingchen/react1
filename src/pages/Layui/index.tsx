
import * as React from 'react'
// 左边
import LeftNav from "./components/left-nav/index";
// 右边
import { Layout, Breadcrumb } from 'antd';
// 引入路由部分
import { Switch, Route, Redirect,Link} from "react-router-dom";
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
const { Footer,Content} = Layout;

interface IProps {
  
}
interface IState{
  navigation:object,
  breadcrumbArr:object[],
  openKeys:Array<object>,
}
export default class Layui extends React.Component<IProps,IState> {
    // 渲染完后
    componentDidMount(){
      this.setState({
        navigation: {
          // name: torage.get("name"),
          // path: storage.get("path")
        }
      });
      this.writeBreadcrumb(this.props)  //调用写的面包屑方法
    }
    //页面的地址更新后调用写面包屑的方法
   componentWillReceiveProps(props:any) {  
    this.writeBreadcrumb(this.props)
  }
    // 面包屑导航
    writeBreadcrumb(props:any) {
      console.log("打断点",props);
      
       let pathname = props.location.pathname
      let arr:any[] = []
      //遍历一级导航
      menu.forEach(item => {
      //遍历二级导航
       if(item.children){
          item.children.forEach(it => {
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
      console.log("arr",arr);
      
      //遍历完后赋值
      this.setState({
          breadcrumbArr: arr
       
      }, () => {
      //react的setState事件的第二个参数可以直接拿到值，因为是异步，只有第一个参数，在下面使用时值不能及时改变，所以加上这个可以在确定修改完值以后操作，openKeys是数组，注意传值
        this.setState({
          openKeys: arr.length > 1 ?
            [arr[0]['key']] : []
        })
      })
  
    }
  constructor(props:any,context:any){
    super(props)
    this.state={
      navigation:{},
      breadcrumbArr:[],
      openKeys:[]
    }
}

 menu = (
  <Menu onClick={e=>this.handleMenuClick(e)}>
    <Menu.Item key="1" >
        退出
    </Menu.Item>
  </Menu>
);
 handleButtonClick(e:any) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

 handleMenuClick(e:any){
  message.info('Click on menu item.');
  console.log('click', e);
}
    render() {
      let {breadcrumbArr}=this.state
      console.log("haha",breadcrumbArr);
      
        return (
               <Layout style={{ minHeight: '100vh' }}>
                    <LeftNav></LeftNav>
                  <Layout className="site-layout">
                  <Content style={{ margin: '0 16px' }}>
                         
                          <div className="layui-header">
                            <Breadcrumb style={{ margin: '16px 0' }}>
                              <Breadcrumb.Item> <Link to="/home">首页</Link></Breadcrumb.Item>
                              {
                               
                                breadcrumbArr ? breadcrumbArr.map((item:any)=>{
                                  console.log("1");
                                  
                                 return <Breadcrumb.Item ><Link to={item.key}>{item.name}</Link></Breadcrumb.Item>
                                })
                                : <Breadcrumb.Item ><Link to={'/home'}>其他</Link></Breadcrumb.Item>

                              }
                             
                            </Breadcrumb>
                            <Dropdown overlay={this.menu}>
                                <Button  type="text" >
                                  名字 <DownOutlined />
                                </Button>
                             </Dropdown>
                          </div>
                          <div className="context-style" style={{ padding: 24 }}>
                          <Switch>
                                <Redirect exact path="/"  to='/home'></Redirect>
                                <Route  path="/home" component={Home}></Route>
                                <Route  path="/app-publish/app-manage" component={AppManage}></Route>
                            </Switch>
                          </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                  </Layout>
                </Layout>
       
        )
    }
}
