import React from 'react';
import { Form, Input, Modal, Select, Steps, Card, Col, Row, Divider, Radio, Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const FormItem = Form.Item;

interface CreateFormProps {
  modalVisible: boolean;
  onSubmit: (fieldsValue: { desc: string }) => void;
  onCancel: () => void;
}
//-------------------------文件上传---------------------------
const UploadFiles = () => {
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        <span>点击上传</span>
      </Upload>
    </>
  );
};
// ---------------------------------------------------------------
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
      title="添加用户"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => onCancel()}
    >

      <Form form={form} >

        <Form.Item
          name="name"
          label="姓名"
          rules={[
            {
              required: true,
              message: '请输入姓名',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item name="sex" label="性别" rules={[
          {
            required: true,
          },
        ]}>
          <Radio.Group>
            <Radio value="a">男</Radio>
            <Radio value="b">女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          name="tel"
          label="手机"
          rules={[
            {
              required: true,
              message: '请输入手机号',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="name"
          label="账号"
          rules={[
            {
              required: true,
              message: '请输入账号',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="passworld"
          label="密码"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input placeholder="请输入" />
        </Form.Item>
        <Form.Item
          name="select"
          label="角色"
          hasFeedback
          rules={[{ required: true, message: '请选择你的角色!' }]}
        >
          <Select placeholder="请选择">
            <Option value="china">超级管理员</Option>
            <Option value="usa">管理员</Option>
            <Option value="usa">租户</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="select"
          label="证件"
          hasFeedback
          rules={[{ required: true }]}
        >
          <Input placeholder="请输入" style={{ width: 298 }} />
          <Select placeholder="请选择" style={{ width: 120 }}>
            <Option value="china">身份证</Option>
            <Option value="usa">户口本</Option>
            <Option value="usa">护照</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="name"
          label="备注"
        >
          <textarea style={{ width: 300, height: 200 }}></textarea>
        </Form.Item>
        <Form.Item name="select" label="上传照片">
          {UploadFiles()}
        </Form.Item>
      </Form>
    </Modal >
  );
};

export default CreateForm;
