"use strict";
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var pro_table_1 = require("@ant-design/pro-table");
var valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error'
};
var tableListDataSource = [];
for (var i = 0; i < 100; i += 1) {
    tableListDataSource.push({
        key: i,
        name: "TradeCode " + i,
        status: valueEnum[Math.floor(Math.random() * 10) % 4],
        updatedAt: Date.now() - Math.floor(Math.random() * 1000),
        createdAt: Date.now() - Math.floor(Math.random() * 2000),
        money: Math.floor(Math.random() * 2000) * i,
        progress: Math.ceil(Math.random() * 100) + 1
    });
}
var columns = [
    {
        title: '标题',
        dataIndex: 'name'
    },
    {
        title: '状态',
        dataIndex: 'status',
        initialValue: 'all',
        valueEnum: {
            all: { text: '全部', status: 'Default' },
            close: { text: '关闭', status: 'Default' },
            running: { text: '运行中', status: 'Processing' },
            online: { text: '已上线', status: 'Success' },
            error: { text: '异常', status: 'Error' }
        }
    },
    {
        title: '创建时间',
        key: 'since',
        dataIndex: 'createdAt',
        valueType: 'dateTime'
    },
    {
        title: '操作',
        key: 'option',
        width: 120,
        valueType: 'option',
        render: function () { return [react_1["default"].createElement("a", null, "\u64CD\u4F5C"), react_1["default"].createElement("a", null, "\u5220\u9664")]; }
    },
];
exports["default"] = (function () {
    var ref = react_1.useRef();
    var _a = react_1.useState(false), collapsed = _a[0], setCollapsed = _a[1];
    return (react_1["default"].createElement(pro_table_1["default"], { columns: columns, request: function () {
            return Promise.resolve({
                data: tableListDataSource,
                success: true
            });
        }, rowKey: "key", pagination: {
            showSizeChanger: true
        }, search: {
            collapsed: collapsed,
            onCollapse: setCollapsed
        }, formRef: ref, toolBarRender: function () { return [
            react_1["default"].createElement(antd_1.Button, { onClick: function () {
                    if (ref.current) {
                        ref.current.setFieldsValue({
                            name: 'test-xxx'
                        });
                    }
                } }, "\u8D4B\u503C"),
        ]; }, dateFormatter: "string", headerTitle: "\u8868\u5355\u8D4B\u503C" }));
});
