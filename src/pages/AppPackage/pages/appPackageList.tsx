import React, { Component } from 'react'
import { Button,Table, Space , Row, Col,Radio,Form, Input, Checkbox,Select,Modal} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
// 本地存储
const { Option } = Select;

const { TextArea } = Input;
 
  // 暂时的假数据，后期需要获取数据后将后端数据变成自己想要的数据
const data1=[
  {
    id:'1',
    key: '1',
    name: 'fdbgds',
    mc: "应用商店",
    szm:"电脑",
    sshy:"2.2.2",
    yybm:"sdvbdfcvrtfgbv",
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
  {
    id:'4',
    key: '4',
    name: 'John Brown',
    mc: "测试应用",
    szm:"c",
    sshy:"股票",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
  {
    id:'5',
    key: '5',
    name: 'John Brown',
    mc: "测试应用",
    szm:"c",
    sshy:"股票",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
];
const data2=[
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
    sshy:"期货",
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
    sshy:"期货",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
  {
    id:'4',
    key: '4',
    name: 'John Brown',
    mc: "测试应用",
    szm:"c",
    sshy:"期货",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
  {
    id:'5',
    key: '5',
    name: 'John Brown',
    mc: "测试应用",
    szm:"c",
    sshy:"期货",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
];
const data3=[
  {
    id:'1',
    key: '1',
    name: 'John Brown',
    mc: "dsag",
    szm:"c",
    sshy:"adsf",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
  {
    id:'2',
    key: '2',
    name: 'John Brown',
    mc: "adf",
    szm:"c",
    sshy:"投asdfaf顾",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
  {
    id:'3',
    key: '3',
    name: 'dsad Brdasdsaown',
    mc: "测试应dadsada用",
    szm:"c",
    sshy:"股adsdas票",
    yybm:"Tencent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
  {
    id:'4',
    key: '4',
    name: 'adsdsadsaa Brown',
    mc: "测试应用",
    szm:"c",
    sshy:"股票dsdsds",
    yybm:"Tencddsaddsent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
  {
    id:'5',
    key: '5',
    name: 'John Brown',
    mc: "测试应dsds用",
    szm:"c",
    sshy:"股票asdd",
    yybm:"Tedadasncent.CeShi.com",
    zxfbsj:"2020.01.20",
    zxfbbb:"2.2.0",
  },
];
export default class appPackageList extends Component <any,any>{
  // 列表 需要更换name
  columns:any= [
    {
      title: '渠道编号',
      dataIndex: 'name',
      key: 'name',
      width:100,
      align:"center",
    },
    {
      title: '渠道',
      dataIndex: 'mc',
      key: 'age',
      align:"center",
    },
    {
      title: '平台',
      dataIndex: 'szm',
      key: 'address',
      align:"center",
    },
    {
      title: '应用版本',
      dataIndex: 'sshy',
      key: 'address',
      align:"center",
    },
    {
      title: '链接地址',
      dataIndex: 'yybm',
      key: 'address',
      align:"center",
      width:400,
      render:(text:any,record:any)=>{
        // console.log(text,2,record);
        return(
        <>
           <TextArea rows={4} style={{width:"200px"}} defaultValue={text} onChange={(e)=>this._textAreaOnchange(e)}></TextArea>
           <Button type="primary"
           onClick={()=>{
                Modal.confirm({
                 title:'复制地址成功',
                 icon:<ExclamationCircleOutlined />,
                 content:`复制内容为${this.state.textareaValue||record.yybm}`,
                 onOk:()=> {
                    console.log(this.state.textareaValue||record.yybm);
                   }
                 })
               }}
           >复制链接地址</Button>
        </>

        )
      }
    },
    {
      title: '计划ID',
      dataIndex: 'zxfbsj',
      key: 'address',
      align:"center",
      render: (text:any, record:any) => (
       <Space size="middle">
         <a>{text}</a>
       </Space>
     ),
    },
    {
      title: '配置上报',
      dataIndex: 'zxfbbb',
      key: 'address',
      align:"center",
      render: (text:any, record:any) => (
       <Space size="middle">
         <a>配置</a>
       </Space>
     ),
    },
    {
      title: '修改接入',
      key: 'tags',
      dataIndex: 'bbgx',
      align:"center",
      render: (text:any, record:any) => (
       <Space size="middle">
         <a>接入配置</a>
       </Space>
     ),
    },
    {
      title: '状态变更',
      key: 'action',
      align:"center",
      render: (text:any, record:any) => (
       <Space size="middle">
         <a>生效</a>
       </Space>
     ),
     
    },
  ];
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
                {
                  id:'4',
                  key: '4',
                  name: 'John Brown',
                  mc: "测试应用",
                  szm:"c",
                  sshy:"股票",
                  yybm:"Tencent.CeShi.com",
                  zxfbsj:"2020.01.20",
                  zxfbbb:"2.2.0",
                },
                {
                  id:'5',
                  key: '5',
                  name: 'John Brown',
                  mc: "测试应用",
                  szm:"c",
                  sshy:"股票",
                  yybm:"Tencent.CeShi.com",
                  zxfbsj:"2020.01.20",
                  zxfbbb:"2.2.0",
                },
            ],
            radioValue:1,
            expand:false,
            pagination: {
              current: 1,
              pageSize: 3,
            },
            textareaValue:''
        }
    }
  //  改变分包、商店、公共三个radio
    onChangeRadio(e:any){
      console.log('radio checked', e.target.value);
      let value=e.target.value;
      switch (value) {
        case 1:
          this.setState({
            data:data1
          })
          break;
        case 2:
          this.setState({
            data:data2
          })
          break;
        case 3:
          this.setState({
            data:data3
          })
          break;
      
        default:
          break;
      }
      this.setState({
        radioValue:e.target.value
      });
    }
    // 分页操作
    handleTableChange(pagination:any){
      this.setState({
        pagination
      })
      
    }
  //  列表中复制链接
  _textAreaOnchange(e:any){
      console.log(e.currentTarget.value);
      this.setState({
        textareaValue:e.currentTarget.value
      })
      
  }
    render() {
      const { data, pagination, loading } = this.state;
        return (
          <div className="appPackage-main">
                  <h1 className="mian-title">
                    渠道包管理
                </h1>
                <Row className="main-radio" gutter={[8, 24]}>
                  <Col span={12}>
                  <Radio.Group onChange={e=>this.onChangeRadio(e)} value={this.state.radioValue} className="radio-group" size="large">
                      <Radio className="radio" value={1}>渠道分包</Radio>
                      <Radio value={2}>应用商店</Radio>
                      <Radio value={3}>渠道公共</Radio>
                </Radio.Group>
                  </Col>
                </Row>
                    <div className="main-inputs">
                      <Form labelCol={{ span: 9}}
                              wrapperCol={{ span: 18}}>
                        <Row>
                        
                          <Form.Item  label="应用名称:">
                        <Select defaultValue="all" style={{ width: 100 }} >
                          <Option value="all">全部</Option>
                        </Select>
                        </Form.Item>
                        
                          <Form.Item  label="应用名称:">
                        <Select defaultValue="all" style={{ width: 100 }} >
                          <Option value="all">全部</Option>
                        </Select>
                        </Form.Item>

                        <Form.Item  label="应用名称:">
                        <Select defaultValue="all" style={{ width: 100 }} >
                          <Option value="all">全部</Option>
                        </Select>
                        </Form.Item>

                        <Form.Item  label="应用名称:">
                        <Select defaultValue="all" style={{ width: 100 }} >
                          <Option value="all">全部</Option>
                        </Select>
                        </Form.Item>

                        <Form.Item  label="应用名称:">
                            <Input placeholder="Basic usage" />
                        </Form.Item>
                        <Form.Item  className="btn-grap">
                        <Button type="primary" htmlType="submit" size='large' style={{background:"green",border:"green"}}>
                           查询
                        </Button>
                          <Button className="title-btn" size='large' type='primary' onClick={()=>{
                            this.props.history.push({
                              pathname:"/app-publish/app-package/add",
                            })
                          }}>+新建应用</Button>
                        </Form.Item>
                        </Row>
                      </Form>
                    </div>
             
                <Table
                className="main-table"
                columns={this.columns}
                dataSource={data}
                rowKey="id"
                bordered
                pagination={pagination}
                onChange={e=>this.handleTableChange(e)}
               >
               </Table>
            </div>
        )
    }
}
