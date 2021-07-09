import React from 'react'
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types'
// import config from './../config/config'

function getBase64(img:any, callback:any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
function beforeUpload(file:any) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('上传图片格式不正确!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('上传图片大小不能超过2MB!');
    }
    return isJpgOrPng && isLt2M;
}

class UploadImg extends React.Component <any,any>{

    static propTypes = {
        upLoadBtnTitle: PropTypes.string, // 上传图片的按钮标题
        upLoadName: PropTypes.string.isRequired, // 上传图片的key
        upLoadAction: PropTypes.string, // 上传图片的接口地址
        upImage: PropTypes.string, // 如果有默认地址
        successCallBack: PropTypes.func.isRequired
    };
    state = {
        loading: false,
        imageUrl: ''
    };

    componentWillReceiveProps(nextProps:any, nextContext:any) {
        console.log(nextProps.upImage);
        if(nextProps.upImage){
            this.setState({
                imageUrl: nextProps.upImage
            })
        }

    }


    handleChange = (info:any) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
     console.log(info);
     

        // 获取服务器返回的数据
        if(info.file.response && info.file.status === 'done' && info.file.response.status === "done"){
            getBase64(info.file.originFileObj, (imageUrl:any) =>
                this.setState({
                  imageUrl,
                  loading: false,
                }),
              );
            // 把结果给调用者返回
            this.props.successCallBack(this.state.imageUrl);
         
        }
    };

    render() {
        const {upLoadBtnTitle, upLoadName, upLoadAction} = this.props;
        const { imageUrl } = this.state;
        console.log(imageUrl);

        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div className="ant-upload-text">{upLoadBtnTitle}</div>
            </div>
        );
        return (
            <Upload
                name={upLoadName}
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                action={upLoadAction}
                beforeUpload={beforeUpload}
                onChange={this.handleChange}
            >
                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        );
    }
}

export default UploadImg;
