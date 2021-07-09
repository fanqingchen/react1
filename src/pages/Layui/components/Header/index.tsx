import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { Layout, Breadcrumb ,Dropdown, Button,Menu ,message} from 'antd';
// 引入路由部分
import {  Link ,withRouter} from "react-router-dom";
//ui
import { DownOutlined } from '@ant-design/icons';

interface IProps {
    breadcrumb?:any
}
interface IState {
 
}
const tuichu = (
    <Menu onClick={e => handleMenuClick(e)}>
      <Menu.Item key="1" >
        退出
      </Menu.Item>
    </Menu>
  );
  function handleButtonClick(e: any) {
    message.info('Click on left button.');
    console.log('click left button', e);
  }

  function handleMenuClick(e: any) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
 
class Header extends React.Component <any,IState>{
  static propTypes = {
    breadcrumb: PropTypes.array, 
};
    render() {
        const { breadcrumb } = this.props
        return (
            <div className="layui-header">
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item ><Link to='/home'>首页</Link></Breadcrumb.Item>
              {
                breadcrumb && breadcrumb.map((item: any, index: any) => {
                   return <Breadcrumb.Item key={index}><Link to={item.key}>{item.name}</Link></Breadcrumb.Item>
                  })
              }

            </Breadcrumb>
            <Dropdown overlay={tuichu}>
              <Button type="text" >
                名字 <DownOutlined />
              </Button>
            </Dropdown>
          </div>
        )
    }

}

// @ts-ignore
export default withRouter(Header)
