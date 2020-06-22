import React from 'react';
import { Form, Input, Modal, Select, Steps, Card, Col, Row, Divider, Radio, Upload, message } from 'antd';
import { FileExcelFilled } from '@ant-design/icons';
const FormItem = Form.Item;

interface CreateFormProps {
    modalVisible: boolean;
    onSubmit: (fieldsValue: { desc: string }) => void;
    onCancel: () => void;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { modalVisible, onSubmit: handleAdd, onCancel } = props;
    const okHandle = async () => {
        const fieldsValue = await form.validateFields();
        form.resetFields();
        handleAdd(fieldsValue);
    };
    return (
        <Modal
            destroyOnClose
            cancelText
            visible={modalVisible}
            onOk={okHandle}
            onCancel={() => onCancel()}
        >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div className="title" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ borderRadius: 52, overflow: 'hidden' }}>
                        <img src={require("@/assets/user.jpg")} width="104px" height="104px" alt="" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: 20 }}>
                        <span style={{ fontSize: 14, fontWeight: 'bold' }}>再看就抬走</span><img src={require("@/assets/wan_sex_w@2x.png")} height="14px" alt="" />
                    </div>
                </div>
                <div style={{ width: 400, padding: '0 20px', display: 'flex', flexDirection: 'column', alignItems: 'flexStart', marginTop: 26, borderBottom: '1px dashed #000000' }}>
                    <div style={{ display: 'flex', alignItems: 'center', margin: 4 }}>
                        <img src={require("@/assets/contacts@2x.png")} width="14px" height="14px" alt="" /><span style={{ marginLeft: 4, fontSize: 14 }}>黑娃</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: 4 }}>
                        <img src={require("@/assets/phone@2x.png")} width="14px" height="16px" alt="" /><span style={{ marginLeft: 4, fontSize: 14 }}>123456789</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: 4 }}>
                        <img src={require("@/assets/id@2x.png")} width="14px" height="16px" alt="" /><span style={{ marginLeft: 4, fontSize: 14 }}>131415</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', margin: '4px 4px 24px 4px' }}>
                        <img src={require("@/assets/id card@2x.png")} width="14px" height="14px" alt="" /><span style={{ marginLeft: 4, fontSize: 14 }}>513022190000000</span>
                    </div>
                </div>
                <div className="content" style={{ width: 400, marginTop: 22 }}>
                    <p style={{ fontSize: 14, fontWeight: 'bold' }}>备注</p>
                    <p style={{ fontSize: 14 }}>取低严其运活接方称话毛此保意理会打地起需切能空里标情行军象电价例家当由北立手信生七及志养且或广海集。
                        准话明间片设计向际把达加术争南布好比积场却内情公四造入七何种百素亲权群少法区无委查。</p>
                </div>
            </div>
        </Modal>
    );
};

export default CreateForm;
