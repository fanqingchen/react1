import React, { Component } from 'react'
import { Button,Table, Space } from 'antd';

interface IUser{
  id:string;
  key?:string;
  name:string;
  mc:string;
  szm:string;
  sshy:string;
  yybm:string;
  zxfbsj:string;
  zxfbbb:string;
}
interface IProps{
  
}

interface IState{
  data:IUser[]
}
const columns:any= [
      
    {
     title: 'ID',
     dataIndex: 'id',
     key: 'id',
     width:50,
     align:"center",
    },
     {
       title: '应用logo',
       dataIndex: 'name',
       key: 'name',
       width:100,
       align:"center",
       render:()=>{
         return <img className="table-img" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F16%2F07%2F06%2F17577cd55945262.jpg%21r650&refer=http%3A%2F%2Fbpic.588ku.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628319216&t=5989b051dc6080029c0b8648eeb22b56" alt="图片" />
       }
     },
     {
       title: '应用名称',
       dataIndex: 'mc',
       key: 'age',
       align:"center",
     },
     {
       title: '应用首字母',
       dataIndex: 'szm',
       key: 'address',
       align:"center",
     },
     {
       title: '所属行业',
       dataIndex: 'sshy',
       key: 'address',
       align:"center",
     },
     {
       title: '应用包名',
       dataIndex: 'yybm',
       key: 'address',
       align:"center",
     },
     {
       title: '最新发布时间',
       dataIndex: 'zxfbsj',
       key: 'address',
       align:"center",
     },
     {
       title: '最新发布版本',
       dataIndex: 'zxfbbb',
       key: 'address',
       align:"center",
     },
     {
       title: '版本更新',
       key: 'tags',
       dataIndex: 'bbgx',
       align:"center",
       render: (text:any, record:any) => (
        <Space size="middle">
          <a>版本新增 </a>
          <a>版本管理</a>
        </Space>
      ),
     },
     {
       title: '操作',
       key: 'action',
       align:"center",
       render: (text:any, record:any) => (
        <Space size="middle">
          <a>修改应用 </a>
        </Space>
      ),
      
     },
   ];
export default class AppManageList extends Component<any,IState>{
    constructor(props:any,context:any){
        super(props)
        this.state={
            data:[
                {
                  id:'1',
                  key: '1',
                  name: 'John Brown',
                  mc: "测试应用",
                  szm:"c",
                  sshy:"期货",
                  yybm:"Tencent.CeShi.com",
                  zxfbsj:"2020.01.20",
                  zxfbbb:"2.2.0",
                },
                {
                  id:'2',
                  key: '2',
                  name: 'John Brown',
                  mc: "测试应用",
                  szm:"c",
                  sshy:"投顾",
                  yybm:"Tencent.CeShi.com",
                  zxfbsj:"2020.01.20",
                  zxfbbb:"2.2.0",
                },
                {
                  id:'3',
                  key: '3',
                  name: 'John Brown',
                  mc: "测试应用",
                  szm:"c",
                  sshy:"股票",
                  yybm:"Tencent.CeShi.com",
                  zxfbsj:"2020.01.20",
                  zxfbbb:"2.2.0",
                },
                
            ]
        }
    }
    render() {
        return (
            < >
                <h1 className="mian-title">
                    应用管理
                </h1>
                <Button className="title-btn" size='large' type='primary' onClick={()=>{
                  this.props.history.push({
                    pathname:"/app-publish/app-manage/add",
                  })
                }}>新建应用</Button>
                <Table
                className="main-table"
                columns={columns}
                dataSource={this.state.data}
                rowKey="id"
                bordered
                pagination={{
                    total: this.state.data.length,
                    pageSize: 5,
                   
                }}
               >
               </Table>
            </>
        )
    }
}
