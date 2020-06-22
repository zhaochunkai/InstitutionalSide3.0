import React from 'react';
import { Form, Input, Modal, Select, Card, Col, Row, Divider } from 'antd';
import styles from './style.less'

interface CreateFormProps {
  modalVisible: boolean;
  onSubmit: (fieldsValue: { desc: string }) => void;
  onCancel: () => void;
};
const cityData = {
  builds: ['逸夫楼', '致远楼', '白宫'],
  types: ["类型一", "类型一", "类型一"],
  classes: ['三年级二班', '五年级三班', '六年级四班'],
  rooms: [
    {
      floorNumber: 0,
      name: "房间一",
      capacity: 0,
      area: 0,
      usage: 1
    }, {
      floorNumber: 0,
      name: "房间二",
      capacity: 0,
      area: 0,
      usage: 1
    }, {
      floorNumber: 0,
      name: "房间三",
      capacity: 0,
      area: 0,
      usage: 1
    },
  ]
};

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const [form] = Form.useForm(); //经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
  const { Option } = Select;
  const { modalVisible, onSubmit: handleAdd, onCancel } = props;
  const okHandle = async () => {
    const fieldsValue = await form.validateFields(); //触发表单验证
    form.resetFields(); //重置一组字段到 initialValues
    handleAdd(fieldsValue);
  };
  return (
    <Modal
      destroyOnClose
      title="添加楼栋信息"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => onCancel()}
      width={800}
    >

      <Form form={form}>
        <Card title="楼栋信息" className="text" bordered={false}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="楼栋"
                name="name"
              >
                <Select placeholder="请选择楼层">
                  {cityData.builds.map(province => (
                    <Option key={province} value={province}>{province}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="类型"
                name="type"
              >
                <Select placeholder="请选择类型">
                  {cityData.types.map(province => (
                    <Option key={province} value={province}>{province}</Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="楼层"
                name="floorNumber"
              >
                <Input placeholder="请输入" />
              </Form.Item>
            </Col>
          </Row>
        </Card>
        <Card title="教室信息" className="text" bordered={false}>
          <Col span={24}>
            <Form.Item
              label="已有教室"
            >
              <Select placeholder="楼栋" style={{ width: 150, marginRight: 6 }}>
                {cityData.rooms.map((items: any) => (
                  <Option key={items} value={items.name}>{items.name}</Option>
                ))}
              </Select>
              <Select placeholder="面积 容量 状态" style={{ width: 300 }}>
                {cityData.rooms.map((items: any) => (
                  <Option key={items} value={items.usage}>{items.usage}</Option>
                ))}
              </Select>
              <span className={styles.btn}>
                <a href="">启用</a>
                <Divider type="vertical" />
                <a href="">删除</a>
                <Divider type="vertical" />
                <a href="">编辑</a>
              </span>
            </Form.Item>
          </Col>
        </Card>
        <Row gutter={16}>

        </Row>
      </Form>
    </Modal>
  );
};

export default CreateForm;
