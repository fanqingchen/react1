import React, { Component } from 'react'
import { Card, Form, Input, Button, Select, DatePicker, Divider, message } from 'antd'
import UploadImg from "../../../components/UploadImg";
const { Option } = Select;
export default class appManageAdd extends Component <any,any>{

    onFinish=(values:any)=>{
        console.log("点击了确定按钮");
    }
    render() {
        return (
            <>
                 <h1 className="mian-title">
                    新建应用
                </h1>
                <Form name="control-hooks" onFinish={this.onFinish} labelCol={{ span: 2 }} wrapperCol={{ span: 10 }}>
                    <Form.Item name="appManage_name" label="应用名称：" rules={[{ required: true ,message: '用户名称不能为空!'}]}>
                        <Input />
                    </Form.Item>
                    
                    <Form.Item name="appManage_zm" label="应用首字母：" rules={[{ required: true,message: '应用首字母不能为空!' }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="gender"
                        label="所属行业："
                        rules={[{ required: true, message: '请选择所属行业！' }]}
                        labelCol={{ span: 2 }} wrapperCol={{ span: 3}}
                    >
                        <Select placeholder="请选择您的行业">
                        <Option value="male">财商</Option>
                        <Option value="female">期货</Option>
                        <Option value="other">投顾</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="appManage_yymb" label="应用首字母：" rules={[{ required: true,message: '应用包名不能为空!' }]}>
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="应用logo"
                        name="focus_img"
                    >
                          <UploadImg
                            // upLoadBtnTitle={"上传首页轮播图"}
                            upLoadName={"avatar"}
                            upLoadAction={"https://www.mocky.io/v2/5cc8019d300000980a055e76"}
                            successCallBack={(name:any)=>{
                                message.success("应用logo上传成功")
                                this.setState({
                                    focusImgUrl:name
                                })
                            }}
                        />
                    </Form.Item>

                    <Form.Item className="appManageAdd-btn" >
                            <Button type="primary" htmlType="submit" >保存</Button>
                            <Divider type="vertical" />
                            <Button onClick={e=>this.props.history.goBack() }>取消</Button>
                    </Form.Item>
                </Form>
            </>
        )
    }
}
