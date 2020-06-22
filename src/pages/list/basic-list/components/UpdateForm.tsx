import React, { useState } from 'react';
import { Form, Button, DatePicker, Input, Modal, Radio, Select, Steps, Card, Col, Row } from 'antd';

import { TableListItem } from '../data';

export interface FormValueType extends Partial<TableListItem> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}
const FormItem = Form.Item;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;


const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals, setFormVals] = useState<FormValueType>({
    name: props.values.name,
    desc: props.values.desc,
    key: props.values.key,
    target: '0',
    template: '0',
    type: '1',
    time: '',
    frequency: 'month',
  });


  const [form] = Form.useForm();

  const {
    onSubmit: handleUpdate,
    onCancel: handleUpdateModalVisible,
    updateModalVisible,
    values,
  } = props;


  const handleNext = async () => {
    const fieldsValue = await form.validateFields();
    setFormVals({ ...formVals, ...fieldsValue });
    handleUpdate(formVals);
  };


  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>保存</Button>
        <Button onClick={() => handleUpdateModalVisible(false, values)}>取消</Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="编辑楼栋信息"
      visible={updateModalVisible}
      footer={renderFooter()}
      onCancel={() => handleUpdateModalVisible(false, values)}
      afterClose={() => handleUpdateModalVisible()}
    >
      <Form
        // {...formLayout}
        form={form}
        initialValues={{
          target: formVals.target,
          template: formVals.template,
          type: formVals.type,
          frequency: formVals.frequency,
          name: formVals.name,
          desc: formVals.desc,
        }}
      >

        {/* {renderContent()} */}

        <Card title="楼栋信息" className="text" bordered={false}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="楼栋"
                name="name2"
              >
                <Select placeholder="请选择管理员">
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="楼层"
                name="url2"
              >
                <Select placeholder="请选择审批员">
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="教室名称"
                name="owner2"
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="教室容量"
                name="approver2"
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="教室用途/面积"
                name="dateRange2"
              >
                <Select placeholder="请选择审批员" style={{ width: 80 }}>
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </Select>
                <Select placeholder="请选择审批员" style={{ width: 200 }}>
                  <Option value="xiao">付晓晓</Option>
                  <Option value="mao">周毛毛</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
    </Modal>
  );
};

export default UpdateForm;
