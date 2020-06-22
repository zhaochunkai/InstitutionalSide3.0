import React, { useState } from 'react';
import { Form, Button, Input, Modal, Select, Card, Col, Row } from 'antd';

import { TableListItem } from '../data';

export interface FormValueType extends Partial<TableListItem> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
  name?: string;
  floorNumber?: number
  address?: string;
  buildingNumber?: string;
  rooms?: Array<number>;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => void;
  editBuildingVisible: boolean;
  values: Partial<TableListItem>;
}
const { Option } = Select;

export interface UpdateFormState {
  formVals: FormValueType;
  currentStep: number;
}



const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const [formVals,] = useState<FormValueType>({
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
    onCancel: editModalVisible,
    editBuildingVisible,
  } = props;


  const renderFooter = () => {
    return (
      <>
        <Button onClick={() => editModalVisible(false)}>确定</Button>
        <Button onClick={() => editModalVisible(false)}>取消</Button>
      </>
    );
  };

  return (
    <Modal
      width={640}
      bodyStyle={{ padding: '32px 40px 48px' }}
      destroyOnClose
      title="编辑楼栋信息"
      visible={editBuildingVisible}
      footer={renderFooter()}
      onCancel={() => editModalVisible(false)}
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
        <Card title="楼栋信息" className="text" bordered={false}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="楼栋"
                name="target"
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
                name="template"
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
