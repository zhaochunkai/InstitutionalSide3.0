import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm, { FormValueType } from './components/UpdateForm';
import UserName from './components/UserName';
import { TableListItem } from './data';
import { queryRule, updateRule, addRule, removeRule, newBuild } from './service';
import { Pagination } from 'antd';
import center from '@/pages/account/center';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

/**
 * 添加节点
 * @param fields
 */


const handleAdd = async (fields: FormValueType) => {
  const hide = message.loading('正在添加');

  try {
    await addRule({
      //-------------数据请求
      desc: fields.desc,
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};


/**
 * 查看节点
 * @param fields
 */

const handleUserName = async (fields: FormValueType) => {
  return true
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async (fields: FormValueType) => {
  const hide = message.loading('正在编辑');

  try {
    await updateRule({
      //--------------------数据请求
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('编辑成功');
    return true;
  } catch (error) {
    hide();
    message.error('编辑失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async (selectedRows: TableListItem[]) => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      //------------------数据请求
      key: selectedRows.map(row => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const TableList: React.FC<{}> = () => {
  const [createModalVisible, handleModalVisible] = useState<boolean>(false); //新建

  const [updateModalVisible, handleUpdateModalVisible] = useState<boolean>(false); //编辑

  const [userNameModalVisible, userNameUpdateModalVisible] = useState<boolean>(false); //用户名

  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '姓名',
      dataIndex: 'name',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              userNameUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            {record.name}
          </a>

        </>
      ),
    },
    {
      title: '账号',
      dataIndex: 'floorNumber',
      sorter: true,
      hideInSearch: true,
      renderText: (val: string) => `${val} `,
    },
    {
      title: '性别',
      dataIndex: 'type',
      hideInSearch: true,
      valueEnum: {
        0: {
          text: '关闭',
          status: 'Default',
        },
        1: {
          text: '运行中',
          status: 'Processing',
        },
      },
    },
    {
      title: '手机',
      dataIndex: 'tel',
      hideInSearch: true,
    },
    {
      title: '状态',
      dataIndex: 'name',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => (
        <>
          <a
            onClick={() => {
              handleUpdateModalVisible(true);
              setStepFormValues(record);
            }}
          >
            编辑
          </a>
          <Divider type="vertical" />
          <a href="">删除</a>
          <Divider type="vertical" />
          <a href="">锁定</a>
          <Divider type="vertical" />
          <a href="">重置密码</a>

        </>
      ),
    },
  ];
  return (
    <PageHeaderWrapper>
      <ProTable<TableListItem>
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="key"
        pagination={false}
        toolBarRender={(action, { selectedRows }) => [
          <Button
            type="dashed"
            style={{
              width: '100%',
              marginBottom: 8,
            }}
            onClick={() => handleModalVisible(true)}
          >
            <PlusOutlined />
            添加
          </Button>,
          selectedRows && selectedRows.length > 0 && (
            <Dropdown
              overlay={
                <Menu
                  onClick={async e => {
                    if (e.key === 'remove') {
                      await handleRemove(selectedRows);
                      action.reload();
                    }
                  }}
                  selectedKeys={[]}
                >
                  <Menu.Item key="remove">批量删除</Menu.Item>
                  <Menu.Item key="approval">批量启用</Menu.Item>
                </Menu>
              }
            >
              <Button>
                批量操作 <DownOutlined />
              </Button>
            </Dropdown>
          ),
        ]}
        tableAlertRender={({ selectedRowKeys, selectedRows }) => (
          <div>
            已选择{' '}
            <a
              style={{
                fontWeight: 600,
              }}
            >
              {selectedRowKeys.length}
            </a>{' '}
            项&nbsp;&nbsp;
          </div>
        )}
        // request={params => newBuild(params)}
        // request={newBuild({})}
        // request={queryRule({})}
        request={params => queryRule(params)} //----------------数据请求
        columns={columns}
        rowSelection={{}}
      />
      <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} />
      <CreateForm
        onSubmit={async value => {
          const success = await handleAdd(value);

          if (success) {
            handleModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => handleModalVisible(false)}
        modalVisible={createModalVisible}
      />
      {stepFormValues && Object.keys(stepFormValues).length ? (
        <UpdateForm
          onSubmit={async value => {
            const success = await handleUpdate(value);

            if (success) {
              handleModalVisible(false);
              setStepFormValues({});

              if (actionRef.current) {
                actionRef.current.reload();
              }
            }
          }}
          onCancel={() => {
            handleUpdateModalVisible(false);
            setStepFormValues({});
          }}
          updateModalVisible={updateModalVisible}
          values={stepFormValues}
        />
      ) : null}
      <UserName
        onSubmit={async value => {
          const success = await handleUserName(value);

          if (success) {
            userNameUpdateModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => userNameUpdateModalVisible(false)}
        modalVisible={userNameModalVisible}
      />
    </PageHeaderWrapper>
  );
};

export default TableList;
