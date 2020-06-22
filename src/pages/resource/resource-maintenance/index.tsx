import React, { useRef, useState } from 'react';
import { Button, Row, Col, Tree, Dropdown, Menu, Typography, Divider } from 'antd';
import ProTable, { ProColumns } from '@ant-design/pro-table';
import { FormInstance } from 'antd/lib/form';
import styles from './style.less';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import ResourceInfo from './dist/resource-info';
import TimeSet from './dist/time-setting';
import ResourceUpload from './dist/resource-upload';
import { TableListItem } from './data';
//-------------------树状图---------------------
const { DirectoryTree } = Tree;
const { Title } = Typography;
const treeData = [
    {
        title: 'parent 0',
        key: '0-0',
        render: (_: any, record: { id: any; }) => ( //这里的record就代表了整个数据
            <>
                <a href="">修改</a>
                <Divider type="vertical" />
                <a onClick={() => {
                    console.log(record.id)
                }}>删除</a>
                <Divider type="vertical" />
                <a href="">停用</a>
            </>
        ),
        children: [
            {
                title: 'leaf 0-0', key: '0-0-0',
                children: [
                    {
                        title: 'leaf 1-0', key: '0-1-0',
                        children: [
                            { title: 'leaf 2-0', key: '0-1-0-0', isLeaf: true }, //isLeaf:设置为叶子节点(设置了loadData时有效)
                            { title: 'leaf 2-1', key: '0-1-1-1', isLeaf: true },
                        ],
                    },
                    {
                        title: 'leaf 1-1', key: '0-1-1',
                        children: [
                            { title: 'leaf 2-2', key: '0-1-0-2', isLeaf: true },
                            { title: 'leaf 2-3', key: '0-1-1-3', isLeaf: true },
                        ],
                    },
                ],
            },
            {
                title: 'leaf 0-1', key: '0-0-1',
                children: [
                    { title: 'leaf 1-2', key: '0-1-2', isLeaf: true },
                    { title: 'leaf 1-3', key: '0-1-3', isLeaf: true },
                ],
            },
        ],
    },
];
const Demo: React.FC<{}> = () => {
    // const onSelect = (keys: object, event: object) => {
    //     console.log('Trigger Select', keys, event);
    // };
    // const onExpand = () => {
    //     console.log('Trigger Expand');
    // };
    const [expandedKeys, setExpandedKeys] = useState<string[]>(['0-0-0', '0-0-1']);
    const [checkedKeys, setCheckedKeys] = useState<string[]>(['0-0-0']);
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [autoExpandParent, setAutoExpandParent] = useState<boolean>(true);

    const onExpand = (expandedKeys: any) => {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeys);
        setAutoExpandParent(false);
    };

    const onCheck = (checkedKeys: any) => {
        console.log('onCheck', checkedKeys);
        setCheckedKeys(checkedKeys);
    };

    const onSelect = (selectedKeys: any, info: any) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeys);
    };

    return (
        <div className={styles.tree_body}>
            <span className={styles.body_title}>资源库</span>
            <Tree
                checkable
                onExpand={onExpand}
                expandedKeys={expandedKeys}
                autoExpandParent={autoExpandParent}
                onCheck={onCheck}
                checkedKeys={checkedKeys}
                onSelect={onSelect}
                selectedKeys={selectedKeys}
                treeData={treeData}
            />
            {/* <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
            /> */}
            {/* <div className={styles.tree_body}>
            <span className={styles.body_title}>资源库</span>
            {/* <DirectoryTree
                multiple
                defaultExpandAll
                onSelect={onSelect}
                onExpand={onExpand}
                treeData={treeData}
            /> */}
            {/* <div className={styles.body_content}>
                <div className={styles.body_content_items}>
                    <div className={styles.body_content_items_left}>
                        <div className={styles.body_content_items_left_left}>高数</div>
                        <div className={styles.body_content_items_left_right}>
                            <PlusSquareOutlined />
                            <MinusSquareOutlined />
                            <FormOutlined />
                        </div>
                    </div>
                    <div className={styles.body_content_items_right}></div>
                </div>
            </div>  */}
            {/* </div> */}
        </div>
    );
};
//-------------------表格------------------------
const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
};
const tableListDataSource: TableListItem[] = [];
for (let i = 0; i < 100; i += 1) {
    tableListDataSource.push({
        key: i,
        name: `TradeCode ${i}`,
        type: valueEnum[Math.floor(Math.random() * 10) % 4],
        studyTime: Date.now() - Math.floor(Math.random() * 1000),
        resourceLibrary: Date.now() - Math.floor(Math.random() * 2000),
        approvalStatus: Math.floor(Math.random() * 2000) * i,
        regulatoryStatus: Math.ceil(Math.random() * 100) + 1,
    });
}
const TableList: React.FC<{}> = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [resourceInfoVisible, setResourceInfoVisible] = useState<boolean>(false);
    const [timeSetVisible, setTimeSetVisible] = useState<boolean>(false);
    const [resourceUploadVisible, setResourceUploadVisible] = useState<boolean>(false);
    const ref = useRef<FormInstance>();
    const columns: ProColumns<TableListItem>[] = [
        {
            title: '资源标题',
            dataIndex: 'name',
            align: 'center'
        },
        {
            title: '资源类型',
            dataIndex: 'type',
            initialValue: 'all',
            align: 'center',
            valueEnum: {
                all: { text: '全部', status: 'Default' },
                word: { text: '文档', status: 'Default' },
                video: { text: '视频', status: 'Default' },
            }
        },
        {
            title: '建议学习时长',
            dataIndex: 'studyTime',
            hideInSearch: true,
            align: 'center',
            render: (_) => <a onClick={() => setTimeSetVisible(true)}>{_}</a>,
        },
        {
            title: '审批状态',
            dataIndex: 'approvalStatus',
            initialValue: 'all',
            align: 'center',
            valueEnum: {
                all: { text: '全部', status: 'Default' },
                pass: { text: '通过', status: 'Success' },
                failure: { text: '未通过', status: 'Error' },
            }
        },
        {
            title: '监管状态',
            dataIndex: 'regulatoryStatus',
            initialValue: 'all',
            align: 'center',
            valueEnum: {
                all: { text: '全部', status: 'Default' },
                enable: { text: '启用', status: 'Success' },
                deactivate: { text: '停用', status: 'Error' },
                // all: { text: '全部', status: 'Default' },
                // close: { text: '关闭', status: 'Default' },
                // running: { text: '运行中', status: 'Processing' },
                // online: { text: '已上线', status: 'Success' },
                // error: { text: '异常', status: 'Error' },
            }
        },
        {
            title: '操作',
            key: 'option',
            valueType: 'option',
            align: 'center',
            render: () => [<a onClick={() => setResourceInfoVisible(true)}>修改</a>, <a>删除</a>, <a>停用</a>],
        },
    ];
    return (
        <PageHeaderWrapper>
            <Row gutter={1}>
                <Col className="gutter-row" span={6}><Demo /></Col>
                <Col className="gutter-row" span={18}>
                    <ProTable<TableListItem>
                        columns={columns}
                        request={() =>
                            Promise.resolve({
                                data: tableListDataSource,
                                success: true,
                                //total: totalCount(分页pagination的总条数)
                            })
                        }
                        rowKey="key"
                        pagination={{
                            showSizeChanger: true, defaultPageSize: 10, defaultCurrent: 0, pageSizeOptions: ['10', '20', '50'],//onChange:页码改变的回调，参数是改变后的页码及每页条数,Function(page, pageSize)
                        }}
                        search={{  //是否显示搜索表单，传入对象时为搜索表单的配置
                            collapsed,  //是否收起(boolean)
                            onCollapse: setCollapsed, //收起按钮的事件
                            // optionRender, 操作栏的 render
                        }}
                        formRef={ref}
                        toolBarRender={(action, { selectedRows }) => [
                            selectedRows && selectedRows.length > 0 && (
                                <Dropdown
                                    overlay={
                                        <Menu
                                            onClick={async e => {
                                                if (e.key === 'remove') {
                                                    // await handleRemove(selectedRows);
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
                            <Button
                                onClick={() => {
                                    // if (ref.current) {
                                    //     ref.current.setFieldsValue({ //通过其可以设置搜索框里面的值
                                    //         name: 'test-xxx',
                                    //         type: 'video'
                                    //     });
                                    // }
                                    setResourceUploadVisible(true)
                                }}
                                type="primary"
                            >上传资源</Button>
                        ]}
                        dateFormatter="string"
                        headerTitle="资源列表"
                        rowSelection={{ //选择框
                            // type:checkbox,可选择类型
                        }}
                    />
                </Col>
            </Row>
            <ResourceInfo
                onSubmit={async value => {
                    console.log(value)
                }}
                onCancel={() => setResourceInfoVisible(false)}
                resourceInfoVisible={resourceInfoVisible}
            />
            <TimeSet
                onSubmit={async value => {
                    console.log(value)
                }}
                onCancel={() => setTimeSetVisible(false)}
                timeSetVisible={timeSetVisible}
            />

            <ResourceUpload
                onSubmit={async value => {
                    console.log(value)
                }}
                onCancel={() => setResourceUploadVisible(false)}
                resourceUploadVisible={resourceUploadVisible}
            />

        </PageHeaderWrapper>)
}

export default TableList;