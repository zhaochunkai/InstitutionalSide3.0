import React from 'react';
import { Modal, Form, Input, Button, InputNumber, Row, Col, Select, Upload, message } from 'antd';
import styles from './style.less'
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;

const { Option } = Select;

interface CreateFormProps {
    resourceUploadVisible: boolean;
    onSubmit: (fieldsValue: { desc: string }) => void;
    onCancel: () => void;
}
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
const onFinish = (values: any) => {
    console.log(values);
};
const CreateForm: React.FC<CreateFormProps> = (props) => {
    //-------------------------文件上传------------------------------
    const resourceUploadProps = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info: { file: { name?: any; status?: any; }; fileList: any; }) {
            const { status } = info.file;
            if (status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name}上传成功.`);
            } else if (status === 'error') {
                message.error(`${info.file.name}上传失败.`);
            }
        },
    };
    const { resourceUploadVisible, onSubmit: handleAdd, onCancel } = props;
    const okHandle = async () => {
        // const fieldsValue = await form.validateFields();
        // form.resetFields();
        // handleAdd(fieldsValue);
    };
    return (
        <Modal
            visible={resourceUploadVisible}
            title="上传资源"
            onOk={okHandle}
            onCancel={() => onCancel()}
            footer={[
                <Button key="back" onClick={onCancel}>
                    取消
            </Button>,
                <Button key="continue" onClick={okHandle}>
                    上传并继续
            </Button>,
                <Button key="submit" type="primary" onClick={okHandle}>
                    上传
            </Button>,
            ]}
        >
            <div className={styles.content}>
                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Row>
                        <Col span={12}>
                            <Form.Item name={['resource', 'resourceLibrary']} label="资源库" className={styles.content_item}>
                                <Select placeholder={'请选择'} className={styles.item_one}>{/* defaultValue="Option1" */}
                                    <Option value="Option1">语文</Option>
                                    <Option value="Option2">数学</Option>
                                    <Option value="Option3">物理</Option>
                                    <Option value="Option4">化学</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item name={['resource', 'type']} label="资源类型" rules={[{ required: true, message: '请选择资源类型' }]} className={styles.content_item}>
                                <Select placeholder={'请选择'} className={styles.item_one}>{/* defaultValue="Option1" */}
                                    <Option value="Option1">语文</Option>
                                    <Option value="Option2">数学</Option>
                                    <Option value="Option3">物理</Option>
                                    <Option value="Option4">化学</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Dragger {...resourceUploadProps}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">点击或将文件拖拽到这里上传</p>
                        <p className="ant-upload-hint">支持拓展名: .rar .zip .doc .docx .pdf .jpg...</p>
                    </Dragger>
                </Form>
            </div>
        </Modal>
    );
};

export default CreateForm;