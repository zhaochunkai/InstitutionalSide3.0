import React from 'react';
import { Modal, Form, Input, Button, InputNumber, Row, Col, Select, TimePicker } from 'antd';
import styles from './style.less'
import moment from 'moment';

const { Option } = Select;

interface CreateFormProps {
    resourceInfoVisible: boolean;
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
const onChange = (time: any, timeString: any) => {
    console.log(time, timeString);
}
const CreateForm: React.FC<CreateFormProps> = (props) => {
    const { resourceInfoVisible, onSubmit: handleAdd, onCancel } = props;
    const okHandle = async () => {
        // const fieldsValue = await form.validateFields();
        // form.resetFields();
        // handleAdd(fieldsValue);
    };
    return (
        <Modal
            title="资源信息修改"
            destroyOnClose
            visible={resourceInfoVisible}
            onOk={okHandle}
            onCancel={() => onCancel()}
        >
            <div className={styles.content}>
                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Row>
                        <Col span={12}>
                            <Form.Item name={['resource', 'resourceLibrary']} label="资源库" className={styles.content_item}>
                                <Select placeholder={'请选择'} className={styles.item_one}>{/* defaultValue="Option1" */}
                                    <Option value="Option1">语文语文语文语文</Option>
                                    <Option value="Option2">数学</Option>
                                    <Option value="Option2">物理</Option>
                                    <Option value="Option2">化学</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item name={['resource', 'name']} label="资源标题" rules={[{ required: true, message: '资源标题不能为空' }]} className={styles.content_item}>
                                <div className={styles.item}>
                                    <Input className={styles.item_ipt} placeholder={'请输入'} />
                                    <span className={styles.content_text}>限制100个字符</span>
                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item name={['resource', 'keyword']} label="关键词" className={styles.content_item}>
                                <div className={styles.item}>
                                    <Input className={styles.item_ipt} placeholder={'请输入'} />
                                    <span className={styles.content_text}>关键词之间用英文“,”隔开</span>
                                </div>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <Form.Item name={['resource', 'type']} label="资源类型" rules={[{ required: true, message: '请选择资源类型' }]} className={styles.content_item}>
                                <Select placeholder={'请选择'} className={styles.item_one}>{/* defaultValue="Option1" */}
                                    <Option value="Option1">语文语文语文语文</Option>
                                    <Option value="Option2">数学</Option>
                                    <Option value="Option2">物理</Option>
                                    <Option value="Option2">化学</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name={['resource', 'studyTime']} label="学习时长" rules={[{ required: true, message: '学习时长不能为空' }]} className={styles.content_item}>
                                <TimePicker
                                    className={styles.item_one}
                                    onChange={onChange}
                                    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                                    defaultValue={moment('00:45:00', 'HH:mm:ss')}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Form.Item name={['resource', 'description']} label="资源描述" className={styles.content_item}>
                                <Input.TextArea className={styles.item_last} placeholder={'请输入'} />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>

        </Modal>
    );
};

export default CreateForm;