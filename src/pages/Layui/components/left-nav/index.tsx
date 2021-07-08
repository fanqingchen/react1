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
export default class LeftNav extends React.Component<IProps, IState> {
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
  render() {
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={e => this.onCollapse(e)}>
        <div className="logo" >
          <img src={logo} alt="" />
          <h1 className="title">运营支持系统</h1>
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {
            this._renderMenu(this.state.menuList)
          }

        </Menu>
      </Sider>

    )
  }
}

// withRouter(LeftNav)