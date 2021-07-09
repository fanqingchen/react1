import * as React from 'react'
import { Layout, Menu } from 'antd';
// 引入路由部分
import { Link, withRouter } from "react-router-dom";
// 图片
import logo from "./imgs/logo.png";
// 引入自己写的数据
import menu from "./config/menuConfig.json";
const { Sider } = Layout;
const { SubMenu } = Menu;
interface List {
  id: number,
  title: string,
  icon: string,
  _key: string,
  prentID: number,
  children?: object[],
}
interface IProps {

}
interface IState {
  collapsed: boolean,
  menuList: List[],

}
class LeftNav extends React.Component<any, IState> {
  constructor(props: any, context: any) {
    super(props)
    this.state = {
      collapsed: false,
      menuList: menu
    }
  }

  //  收缩  
  onCollapse(e: any) {
    this.setState({ collapsed: !this.state.collapsed });
  };
  // 渲染列表
  _renderMenu(menuList: any) {

    return menuList.map((item: any) => {
      if (!item.children) {
        //  没有孩子，是item
        return (<Menu.Item key={item._key} >
          {/*  */}
          <Link to={item._key}>
            {item.title}
          </Link>
        </Menu.Item>)

      } else {
        //  是sub
        return (
          <SubMenu key={item._key}
            title={item.title}>
            {this._renderMenu(item.children)}
          </SubMenu>
        )
      }
    })
  }
   // 查找需要让哪个Submenu展开(实现不了  报错)
   _getOpenKeys(menuList:any,path:any){
    for(let i=0; i<menuList.length; i++){
        let item = menuList[i]
        if(item.children && item.children.find((c_item:any)=>c_item._key === path)){
            return item._key
        }
    }
  }
  render() {
    let { collapsed } = this.state;
    let path=this.props.history.location.pathname;
    let ppath = path.substr(0, path.indexOf("/",2)) ? path.substr(0, path.indexOf("/",2)) : path
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={e => this.onCollapse(e)}>
        <div className="logo" >
          <img src={logo} alt="" />
          <h1 className="title">运营支持系统</h1>
        </div>
        <Menu 
        theme="dark" 
        defaultSelectedKeys={[path]} 
        selectedKeys={[path,ppath]}
        mode="inline">
          {
            this._renderMenu(this.state.menuList)
          }
        </Menu>
      </Sider>
    )
  }
}
// @ts-ignore
export default  withRouter(LeftNav)