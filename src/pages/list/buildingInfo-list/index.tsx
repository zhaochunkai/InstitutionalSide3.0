import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Divider, Dropdown, Menu, message } from 'antd';
import React, { useState, useRef } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable, { ProColumns, ActionType } from '@ant-design/pro-table';
import AddBuildingInfo from './components/add-building-info';
import EditBuildingInfo, { FormValueType } from './components/edit-building-info';
import { TableListItem, addBuildsParams } from './data.d';
import { editBuilds, removeRule, building, addbuilds } from './service';
/**
 * 添加
 * @param fields
 */


const handleAdd = async (fields: FormValueType) => {
  const hide = message.loading('正在添加');

  try {
    await addbuilds({
      //-------------数据请求
      name: fields.name,
      floorNumber: fields.floorNumber,
      type: fields.type,
      address: fields.address,
      buildingNumber: fields.buildingNumber,
      rooms: fields.rooms
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
 * 编辑
 * @param fields
 */

const handleUpdate = async (fields: addBuildsParams) => {
  const hide = message.loading('正在编辑');

  try {
    await editBuilds({
      //-------------数据请求
      id: fields.id,
      name: fields.name,
      floorNumber: fields.floorNumber,
      type: fields.type,
      address: fields.address,
      buildingNumber: fields.buildingNumber,
      rooms: fields.rooms
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
  const [addBuildingVisible, addModalVisible] = useState<boolean>(false); //新建
  const [editBuildingVisible, editModalVisible] = useState<boolean>(false); //编辑

  const [stepFormValues, setStepFormValues] = useState({});
  const actionRef = useRef<ActionType>();
  const columns: ProColumns<TableListItem>[] = [
    {
      title: '楼栋名称：',
      dataIndex: 'name'
      // valueType，会改变检索部分中的DOM,如valueType='dateTime':在检索部分会显示成日期控件
    },
    {
      title: '楼层数',
      dataIndex: 'floorNumber',
      sorter: true,
      hideInSearch: true, //通过配置 hideInSearch, 使其不显示在检索部分
      renderText: (val: string) => val,
    },
    {
      title: '状态',
      dataIndex: 'type',
      valueEnum: { //当前列值的枚举
        2: {
          text: '启用',
          status: 'Success',
        }, //前面数字是后台传的值，text是页面显示的，status是antd提供的状态
        1: {
          text: '未启用',
          status: 'Default',
        }
      },
    },
    {
      title: '操作',
      dataIndex: 'id',//列数据在数据项中对应的 key
      render: (_, record) => ( //这里的record就代表了整个数据
        <>
          <a href="">启用</a>
          <Divider type="vertical" />
          <a onClick={() => {
          }}>删除</a>
          <Divider type="vertical" />
          <a
            onClick={() => {
              // console.log(record.id)
              editModalVisible(true);
              setStepFormValues(record.id);
            }}
          >
            编辑
          </a>
        </>
      ),
    },
  ];
  return (//布局标签
    <PageHeaderWrapper>
      <ProTable<TableListItem> //表格Pro组件
        // options={false}// 密度, 全屏, 刷新, 列设置, 可以设置 table 的显示方式, 通过 options 来配置其是否显
        headerTitle="查询表格" //表头
        // search={false} //是否显示检索部分
        actionRef={actionRef} //通过useRef创建的一个对象，通过器访问dom对象。用于触发刷新操作等，看api
        rowKey="id" //表格行 key 的取值，可以是字符串或一个函数
        toolBarRender={(action, { selectedRows }) => [//toolBarRender 用来设置工具栏的按钮及其事件
          <Button
            type="dashed"
            style={{
              width: '100%',
              marginBottom: 8,
            }}
            onClick={() => addModalVisible(true)}
          >
            <PlusOutlined />
            添加
          </Button>
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
        //----------------数据请求-------------------
        request={async (params) => {
          let response = await building(params); //await后跟一个Promise对象,若不是Promise对象，将会被Promise.resolve()转化为Promise对象。
          //并根据是否抛出错误而进行不同的操作：若无错误抛出则立即成为resolved状态，表达式的值被做为then方法的第一个回调方法的参数；
          //抛出错误则成为rejected状态并停止函数的执行，错误对象做为catch方法的参数。
          console.log(response)
          return { data: response.items, total: response.totalCount };
        }}
        columns={columns} //--------------表头column  ------------表格内容（即数据）dataSource--------
        // rowSelection={{}} //rowSelection 用来控制表格是否可以多选
        //可以让Table的第一列成为联动的选择框。API中表示通过 rowSelection.selectedRowKeys 
        // 来控制选中项，但selectedRowKeys 控制的只是dataSource当前的顺序编号。所以在table有分页的时候，可能会导致选择的明明是第一页，
        // 但其他几页也都处于选中状态. 解决方案：加上rowKey="id"或者rowKey={record => record.id}。
        pagination={{ defaultPageSize: 10, defaultCurrent: 0, pageSizeOptions: ['10', '20', '50'] }}
      />
      <AddBuildingInfo
        onSubmit={async value => {
          const success = await handleAdd(value);

          if (success) {
            addModalVisible(false);

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => addModalVisible(false)}
        modalVisible={addBuildingVisible}
      />
      <EditBuildingInfo
        onSubmit={async value => {
          const success = await handleUpdate(value);

          if (success) {
            addModalVisible(false);
            setStepFormValues({});

            if (actionRef.current) {
              actionRef.current.reload();
            }
          }
        }}
        onCancel={() => {
          editModalVisible(false);
          setStepFormValues({});
        }}
        editBuildingVisible={editBuildingVisible}
        values={stepFormValues}
      />
    </PageHeaderWrapper>
  );
};

export default TableList;
