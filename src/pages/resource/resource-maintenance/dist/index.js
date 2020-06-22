"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var pro_table_1 = require("@ant-design/pro-table");
var style_less_1 = require("./style.less");
var pro_layout_1 = require("@ant-design/pro-layout");
var icons_1 = require("@ant-design/icons");
var resource_info_1 = require("./dist/resource-info");
var time_setting_1 = require("./dist/time-setting");
var resource_upload_1 = require("./dist/resource-upload");
//-------------------树状图---------------------
var DirectoryTree = antd_1.Tree.DirectoryTree;
var Title = antd_1.Typography.Title;
var treeData = [
    {
        title: 'parent 0',
        key: '0-0',
        render: function (_, record) { return ( //这里的record就代表了整个数据
        react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement("a", { href: "" }, "\u4FEE\u6539"),
            react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
            react_1["default"].createElement("a", { onClick: function () {
                    console.log(record.id);
                } }, "\u5220\u9664"),
            react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
            react_1["default"].createElement("a", { href: "" }, "\u505C\u7528"))); },
        children: [
            {
                title: 'leaf 0-0', key: '0-0-0',
                children: [
                    {
                        title: 'leaf 1-0', key: '0-1-0',
                        children: [
                            { title: 'leaf 2-0', key: '0-1-0-0', isLeaf: true },
                            { title: 'leaf 2-1', key: '0-1-1-1', isLeaf: true },
                        ]
                    },
                    {
                        title: 'leaf 1-1', key: '0-1-1',
                        children: [
                            { title: 'leaf 2-2', key: '0-1-0-2', isLeaf: true },
                            { title: 'leaf 2-3', key: '0-1-1-3', isLeaf: true },
                        ]
                    },
                ]
            },
            {
                title: 'leaf 0-1', key: '0-0-1',
                children: [
                    { title: 'leaf 1-2', key: '0-1-2', isLeaf: true },
                    { title: 'leaf 1-3', key: '0-1-3', isLeaf: true },
                ]
            },
        ]
    },
];
var Demo = function () {
    // const onSelect = (keys: object, event: object) => {
    //     console.log('Trigger Select', keys, event);
    // };
    // const onExpand = () => {
    //     console.log('Trigger Expand');
    // };
    var _a = react_1.useState(['0-0-0', '0-0-1']), expandedKeys = _a[0], setExpandedKeys = _a[1];
    var _b = react_1.useState(['0-0-0']), checkedKeys = _b[0], setCheckedKeys = _b[1];
    var _c = react_1.useState([]), selectedKeys = _c[0], setSelectedKeys = _c[1];
    var _d = react_1.useState(true), autoExpandParent = _d[0], setAutoExpandParent = _d[1];
    var onExpand = function (expandedKeys) {
        console.log('onExpand', expandedKeys);
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        setExpandedKeys(expandedKeys);
        setAutoExpandParent(false);
    };
    var onCheck = function (checkedKeys) {
        console.log('onCheck', checkedKeys);
        setCheckedKeys(checkedKeys);
    };
    var onSelect = function (selectedKeys, info) {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeys);
    };
    return (react_1["default"].createElement("div", { className: style_less_1["default"].tree_body },
        react_1["default"].createElement("span", { className: style_less_1["default"].body_title }, "\u8D44\u6E90\u5E93"),
        react_1["default"].createElement(antd_1.Tree, { checkable: true, onExpand: onExpand, expandedKeys: expandedKeys, autoExpandParent: autoExpandParent, onCheck: onCheck, checkedKeys: checkedKeys, onSelect: onSelect, selectedKeys: selectedKeys, treeData: treeData })));
};
//-------------------表格------------------------
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
        type: valueEnum[Math.floor(Math.random() * 10) % 4],
        studyTime: Date.now() - Math.floor(Math.random() * 1000),
        resourceLibrary: Date.now() - Math.floor(Math.random() * 2000),
        approvalStatus: Math.floor(Math.random() * 2000) * i,
        regulatoryStatus: Math.ceil(Math.random() * 100) + 1
    });
}
var TableList = function () {
    var _a = react_1.useState(true), collapsed = _a[0], setCollapsed = _a[1];
    var _b = react_1.useState(false), resourceInfoVisible = _b[0], setResourceInfoVisible = _b[1];
    var _c = react_1.useState(false), timeSetVisible = _c[0], setTimeSetVisible = _c[1];
    var _d = react_1.useState(false), resourceUploadVisible = _d[0], setResourceUploadVisible = _d[1];
    var ref = react_1.useRef();
    var columns = [
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
                video: { text: '视频', status: 'Default' }
            }
        },
        {
            title: '建议学习时长',
            dataIndex: 'studyTime',
            hideInSearch: true,
            align: 'center',
            render: function (_) { return react_1["default"].createElement("a", { onClick: function () { return setTimeSetVisible(true); } }, _); }
        },
        {
            title: '审批状态',
            dataIndex: 'approvalStatus',
            initialValue: 'all',
            align: 'center',
            valueEnum: {
                all: { text: '全部', status: 'Default' },
                pass: { text: '通过', status: 'Success' },
                failure: { text: '未通过', status: 'Error' }
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
                deactivate: { text: '停用', status: 'Error' }
            }
        },
        {
            title: '操作',
            key: 'option',
            valueType: 'option',
            align: 'center',
            render: function () { return [react_1["default"].createElement("a", { onClick: function () { return setResourceInfoVisible(true); } }, "\u4FEE\u6539"), react_1["default"].createElement("a", null, "\u5220\u9664"), react_1["default"].createElement("a", null, "\u505C\u7528")]; }
        },
    ];
    return (react_1["default"].createElement(pro_layout_1.PageHeaderWrapper, null,
        react_1["default"].createElement(antd_1.Row, { gutter: 1 },
            react_1["default"].createElement(antd_1.Col, { className: "gutter-row", span: 6 },
                react_1["default"].createElement(Demo, null)),
            react_1["default"].createElement(antd_1.Col, { className: "gutter-row", span: 18 },
                react_1["default"].createElement(pro_table_1["default"], { columns: columns, request: function () {
                        return Promise.resolve({
                            data: tableListDataSource,
                            success: true
                        });
                    }, rowKey: "key", pagination: {
                        showSizeChanger: true, defaultPageSize: 10, defaultCurrent: 0, pageSizeOptions: ['10', '20', '50']
                    }, search: {
                        collapsed: collapsed,
                        onCollapse: setCollapsed
                    }, formRef: ref, toolBarRender: function (action, _a) {
                        var selectedRows = _a.selectedRows;
                        return [
                            selectedRows && selectedRows.length > 0 && (react_1["default"].createElement(antd_1.Dropdown, { overlay: react_1["default"].createElement(antd_1.Menu, { onClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            if (e.key === 'remove') {
                                                // await handleRemove(selectedRows);
                                                action.reload();
                                            }
                                            return [2 /*return*/];
                                        });
                                    }); }, selectedKeys: [] },
                                    react_1["default"].createElement(antd_1.Menu.Item, { key: "remove" }, "\u6279\u91CF\u5220\u9664"),
                                    react_1["default"].createElement(antd_1.Menu.Item, { key: "approval" }, "\u6279\u91CF\u542F\u7528")) },
                                react_1["default"].createElement(antd_1.Button, null,
                                    "\u6279\u91CF\u64CD\u4F5C ",
                                    react_1["default"].createElement(icons_1.DownOutlined, null)))),
                            react_1["default"].createElement(antd_1.Button, { onClick: function () {
                                    // if (ref.current) {
                                    //     ref.current.setFieldsValue({ //通过其可以设置搜索框里面的值
                                    //         name: 'test-xxx',
                                    //         type: 'video'
                                    //     });
                                    // }
                                    setResourceUploadVisible(true);
                                }, type: "primary" }, "\u4E0A\u4F20\u8D44\u6E90")
                        ];
                    }, dateFormatter: "string", headerTitle: "\u8D44\u6E90\u5217\u8868", rowSelection: { //选择框
                    // type:checkbox,可选择类型
                    } }))),
        react_1["default"].createElement(resource_info_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(value);
                    return [2 /*return*/];
                });
            }); }, onCancel: function () { return setResourceInfoVisible(false); }, resourceInfoVisible: resourceInfoVisible }),
        react_1["default"].createElement(time_setting_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(value);
                    return [2 /*return*/];
                });
            }); }, onCancel: function () { return setTimeSetVisible(false); }, timeSetVisible: timeSetVisible }),
        react_1["default"].createElement(resource_upload_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    console.log(value);
                    return [2 /*return*/];
                });
            }); }, onCancel: function () { return setResourceUploadVisible(false); }, resourceUploadVisible: resourceUploadVisible })));
};
exports["default"] = TableList;
