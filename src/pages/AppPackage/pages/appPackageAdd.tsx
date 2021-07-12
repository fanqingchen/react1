import React, {  useState, useEffect  } from 'react'
import { Anchor 
    ,Form,
    Input,
    Button, 
    Select,
} from 'antd';
const { Link } = Anchor;

const AnchorExample: React.FC = () => {
    const [targetOffset, setTargetOffset] = useState<number | undefined>(undefined);
    useEffect(() => {
      setTargetOffset(window.innerHeight / 2);
    }, []);
    return (
      <Anchor targetOffset={targetOffset} className="main-add-Anchor">
        <h1>新建应用渠道包</h1>
        <Link href="#API" title="应用API配置">
                <Link href="#components-anchor-appSelect" title="应用APP选择" />
                <Link href="#components-anchor-channelConfig" title="渠道信息配置" />
                <Link href="#components-anchor-management" title="转化上报管理" />
                <Link href="#components-anchor-channelId" title="APP渠道编号" />
        </Link>
        <Link href="#API" title="场景配置">
                <Link href="#components-anchor-peopleInset" title="员工接入配置" />

        </Link>
      </Anchor>
    );
  };

export default class appPackageAdd extends React.Component <any,any>{
    render() {
        return (
            <>
            <AnchorExample/>
               <div className="appPackageAdd-main">
               <Form
                 labelCol={{ span: 4 }}
                 wrapperCol={{ span: 6 }}
               >
                   <div id="components-anchor-appSelect">
                       <h1>应用APP选择</h1>
                       <Form.Item label="应用名称" >
                           <Select>
                           <Select.Option value="demo">demo</Select.Option>
                           </Select>
                       </Form.Item>
                       <Form.Item label="应用名称" >
                           <Select>
                           <Select.Option value="demo">demo</Select.Option>
                           </Select>
                       </Form.Item>
                       <Form.Item label="应用名称" >
                           <Select>
                           <Select.Option value="demo">demo</Select.Option>
                           </Select>
                       </Form.Item>
                       <Form.Item label="应用名称" >
                           <Select>
                           <Select.Option value="demo">demo</Select.Option>
                           </Select>
                       </Form.Item>
                   </div>
                   <div id="components-anchor-channelConfig">
                   <h1>渠道信息配置</h1>
                   <Form.Item label="应用名称" >
                           <Select>
                           <Select.Option value="demo">demo</Select.Option>
                           </Select>
                       </Form.Item>
                       <Form.Item label="应用名称" >
                           <Select>
                           <Select.Option value="demo">demo</Select.Option>
                           </Select>
                       </Form.Item>
                   </div>
                   <div id="components-anchor-management">
                   <h1>转化上报管理</h1>
                     
                   </div>
                   <div id="components-anchor-channelId">
                   <h1>APP渠道编号</h1>
                    
                   </div>
                   <div id="components-anchor-peopleInset">
                   <h1>员工接入配置</h1>
                   </div>
                   </Form>
               </div>

            </>
        )
    }
}
