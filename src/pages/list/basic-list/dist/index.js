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
var icons_1 = require("@ant-design/icons");
var antd_1 = require("antd");
var react_1 = require("react");
var pro_layout_1 = require("@ant-design/pro-layout");
var pro_table_1 = require("@ant-design/pro-table");
var CreateForm_1 = require("./components/CreateForm");
var UpdateForm_1 = require("./components/UpdateForm");
var UserName_1 = require("./components/UserName");
var service_1 = require("./service");
var antd_2 = require("antd");
function onChange(pageNumber) {
    console.log('Page: ', pageNumber);
}
/**
 * 添加节点
 * @param fields
 */
var handleAdd = function (fields) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading('正在添加');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, service_1.addRule({
                        //-------------数据请求
                        desc: fields.desc
                    })];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success('添加成功');
                return [2 /*return*/, true];
            case 3:
                error_1 = _a.sent();
                hide();
                antd_1.message.error('添加失败请重试！');
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 * 查看节点
 * @param fields
 */
var handleUserName = function (fields) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, true];
    });
}); };
/**
 * 更新节点
 * @param fields
 */
var handleUpdate = function (fields) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading('正在编辑');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, service_1.updateRule({
                        //--------------------数据请求
                        name: fields.name,
                        desc: fields.desc,
                        key: fields.key
                    })];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success('编辑成功');
                return [2 /*return*/, true];
            case 3:
                error_2 = _a.sent();
                hide();
                antd_1.message.error('编辑失败请重试！');
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
/**
 *  删除节点
 * @param selectedRows
 */
var handleRemove = function (selectedRows) { return __awaiter(void 0, void 0, void 0, function () {
    var hide, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                hide = antd_1.message.loading('正在删除');
                if (!selectedRows)
                    return [2 /*return*/, true];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, service_1.removeRule({
                        //------------------数据请求
                        key: selectedRows.map(function (row) { return row.key; })
                    })];
            case 2:
                _a.sent();
                hide();
                antd_1.message.success('删除成功，即将刷新');
                return [2 /*return*/, true];
            case 3:
                error_3 = _a.sent();
                hide();
                antd_1.message.error('删除失败，请重试');
                return [2 /*return*/, false];
            case 4: return [2 /*return*/];
        }
    });
}); };
var TableList = function () {
    var _a = react_1.useState(false), createModalVisible = _a[0], handleModalVisible = _a[1]; //新建
    var _b = react_1.useState(false), updateModalVisible = _b[0], handleUpdateModalVisible = _b[1]; //编辑
    var _c = react_1.useState(false), userNameModalVisible = _c[0], userNameUpdateModalVisible = _c[1]; //用户名
    var _d = react_1.useState({}), stepFormValues = _d[0], setStepFormValues = _d[1];
    var actionRef = react_1.useRef();
    var columns = [
        {
            title: '姓名',
            dataIndex: 'name',
            render: function (_, record) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("a", { onClick: function () {
                        userNameUpdateModalVisible(true);
                        setStepFormValues(record);
                    } }, record.name))); }
        },
        {
            title: '账号',
            dataIndex: 'floorNumber',
            sorter: true,
            hideInSearch: true,
            renderText: function (val) { return val + " "; }
        },
        {
            title: '性别',
            dataIndex: 'type',
            hideInSearch: true,
            valueEnum: {
                0: {
                    text: '关闭',
                    status: 'Default'
                },
                1: {
                    text: '运行中',
                    status: 'Processing'
                }
            }
        },
        {
            title: '手机',
            dataIndex: 'tel',
            hideInSearch: true
        },
        {
            title: '状态',
            dataIndex: 'name'
        },
        {
            title: '操作',
            dataIndex: 'option',
            valueType: 'option',
            render: function (_, record) { return (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement("a", { onClick: function () {
                        handleUpdateModalVisible(true);
                        setStepFormValues(record);
                    } }, "\u7F16\u8F91"),
                react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
                react_1["default"].createElement("a", { href: "" }, "\u5220\u9664"),
                react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
                react_1["default"].createElement("a", { href: "" }, "\u9501\u5B9A"),
                react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
                react_1["default"].createElement("a", { href: "" }, "\u91CD\u7F6E\u5BC6\u7801"))); }
        },
    ];
    return (react_1["default"].createElement(pro_layout_1.PageHeaderWrapper, null,
        react_1["default"].createElement(pro_table_1["default"], { headerTitle: "\u67E5\u8BE2\u8868\u683C", actionRef: actionRef, rowKey: "key", pagination: false, toolBarRender: function (action, _a) {
                var selectedRows = _a.selectedRows;
                return [
                    react_1["default"].createElement(antd_1.Button, { type: "dashed", style: {
                            width: '100%',
                            marginBottom: 8
                        }, onClick: function () { return handleModalVisible(true); } },
                        react_1["default"].createElement(icons_1.PlusOutlined, null),
                        "\u6DFB\u52A0"),
                    selectedRows && selectedRows.length > 0 && (react_1["default"].createElement(antd_1.Dropdown, { overlay: react_1["default"].createElement(antd_1.Menu, { onClick: function (e) { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!(e.key === 'remove')) return [3 /*break*/, 2];
                                            return [4 /*yield*/, handleRemove(selectedRows)];
                                        case 1:
                                            _a.sent();
                                            action.reload();
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); }, selectedKeys: [] },
                            react_1["default"].createElement(antd_1.Menu.Item, { key: "remove" }, "\u6279\u91CF\u5220\u9664"),
                            react_1["default"].createElement(antd_1.Menu.Item, { key: "approval" }, "\u6279\u91CF\u542F\u7528")) },
                        react_1["default"].createElement(antd_1.Button, null,
                            "\u6279\u91CF\u64CD\u4F5C ",
                            react_1["default"].createElement(icons_1.DownOutlined, null)))),
                ];
            }, tableAlertRender: function (_a) {
                var selectedRowKeys = _a.selectedRowKeys, selectedRows = _a.selectedRows;
                return (react_1["default"].createElement("div", null,
                    "\u5DF2\u9009\u62E9",
                    ' ',
                    react_1["default"].createElement("a", { style: {
                            fontWeight: 600
                        } }, selectedRowKeys.length),
                    ' ',
                    "\u9879\u00A0\u00A0"));
            }, 
            // request={params => newBuild(params)}
            // request={newBuild({})}
            // request={queryRule({})}
            request: function (params) { return service_1.queryRule(params); }, columns: columns, rowSelection: {} }),
        react_1["default"].createElement(antd_2.Pagination, { showQuickJumper: true, defaultCurrent: 2, total: 500, onChange: onChange }),
        react_1["default"].createElement(CreateForm_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var success;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, handleAdd(value)];
                        case 1:
                            success = _a.sent();
                            if (success) {
                                handleModalVisible(false);
                                if (actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () { return handleModalVisible(false); }, modalVisible: createModalVisible }),
        stepFormValues && Object.keys(stepFormValues).length ? (react_1["default"].createElement(UpdateForm_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var success;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, handleUpdate(value)];
                        case 1:
                            success = _a.sent();
                            if (success) {
                                handleModalVisible(false);
                                setStepFormValues({});
                                if (actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () {
                handleUpdateModalVisible(false);
                setStepFormValues({});
            }, updateModalVisible: updateModalVisible, values: stepFormValues })) : null,
        react_1["default"].createElement(UserName_1["default"], { onSubmit: function (value) { return __awaiter(void 0, void 0, void 0, function () {
                var success;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, handleUserName(value)];
                        case 1:
                            success = _a.sent();
                            if (success) {
                                userNameUpdateModalVisible(false);
                                if (actionRef.current) {
                                    actionRef.current.reload();
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            }); }, onCancel: function () { return userNameUpdateModalVisible(false); }, modalVisible: userNameModalVisible })));
};
exports["default"] = TableList;
