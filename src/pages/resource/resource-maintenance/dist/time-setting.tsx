import React from 'react';
import { Modal, Form, Input, Button, InputNumber, Row, Col, Select, TimePicker } from 'antd';
import styles from './style.less'
import moment from 'moment';

const { Option } = Select;

interface CreateFormProps {
    timeSetVisible: boolean;
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
    const { timeSetVisible, onSubmit: handleAdd, onCancel } = props;
    const okHandle = async () => {
        // const fieldsValue = await form.validateFields();
        // form.resetFields();
        // handleAdd(fieldsValue);
    };
    return (
        <Modal
            title="资源信息修改"
            destroyOnClose
            visible={timeSetVisible}
            onOk={okHandle}
            onCancel={() => onCancel()}
        >
            <div className={styles.timeSet_content}>
                <Form name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                    <Row>
                        <Col span={12}>
                            <div className={styles.timeSet_content_top}>
                                <p className={styles.timeSet_content_top_one}>针对资源:</p>
                                <p className={styles.timeSet_content_top_one}>孔子与学生的故事</p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col span={24}>
                            <Form.Item name={['resource', 'studyTime']} label="学习时长" rules={[{ required: true, message: '学习时长不能为空' }]}>
                                <TimePicker
                                    className={styles.timeSet_content_bot}
                                    onChange={onChange}
                                    defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>

        </Modal>
    );
};

export default CreateForm;