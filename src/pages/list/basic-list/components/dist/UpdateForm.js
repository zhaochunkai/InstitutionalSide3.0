"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var FormItem = antd_1.Form.Item;
var TextArea = antd_1.Input.TextArea;
var Option = antd_1.Select.Option;
var RadioGroup = antd_1.Radio.Group;
var UpdateForm = function (props) {
    var _a = react_1.useState({
        name: props.values.name,
        desc: props.values.desc,
        key: props.values.key,
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month'
    }), formVals = _a[0], setFormVals = _a[1];
    var form = antd_1.Form.useForm()[0];
    var handleUpdate = props.onSubmit, handleUpdateModalVisible = props.onCancel, updateModalVisible = props.updateModalVisible, values = props.values;
    var handleNext = function () { return __awaiter(void 0, void 0, void 0, function () {
        var fieldsValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, form.validateFields()];
                case 1:
                    fieldsValue = _a.sent();
                    setFormVals(__assign(__assign({}, formVals), fieldsValue));
                    handleUpdate(formVals);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderFooter = function () {
        return (react_1["default"].createElement(react_1["default"].Fragment, null,
            react_1["default"].createElement(antd_1.Button, { onClick: function () { return handleUpdateModalVisible(false, values); } }, "\u4FDD\u5B58"),
            react_1["default"].createElement(antd_1.Button, { onClick: function () { return handleUpdateModalVisible(false, values); } }, "\u53D6\u6D88")));
    };
    return (react_1["default"].createElement(antd_1.Modal, { width: 640, bodyStyle: { padding: '32px 40px 48px' }, destroyOnClose: true, title: "\u7F16\u8F91\u697C\u680B\u4FE1\u606F", visible: updateModalVisible, footer: renderFooter(), onCancel: function () { return handleUpdateModalVisible(false, values); }, afterClose: function () { return handleUpdateModalVisible(); } },
        react_1["default"].createElement(antd_1.Form
        // {...formLayout}
        , { 
            // {...formLayout}
            form: form, initialValues: {
                target: formVals.target,
                template: formVals.template,
                type: formVals.type,
                frequency: formVals.frequency,
                name: formVals.name,
                desc: formVals.desc
            } },
            react_1["default"].createElement(antd_1.Card, { title: "\u697C\u680B\u4FE1\u606F", className: "text", bordered: false },
                react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u697C\u680B", name: "name2" },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9\u7BA1\u7406\u5458" },
                                react_1["default"].createElement(Option, { value: "xiao" }, "\u4ED8\u6653\u6653"),
                                react_1["default"].createElement(Option, { value: "mao" }, "\u5468\u6BDB\u6BDB")))),
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u697C\u5C42", name: "url2" },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9\u5BA1\u6279\u5458" },
                                react_1["default"].createElement(Option, { value: "xiao" }, "\u4ED8\u6653\u6653"),
                                react_1["default"].createElement(Option, { value: "mao" }, "\u5468\u6BDB\u6BDB"))))),
                react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u6559\u5BA4\u540D\u79F0", name: "owner2" },
                            react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165" }))),
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u6559\u5BA4\u5BB9\u91CF", name: "approver2" },
                            react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165" })))),
                react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u6559\u5BA4\u7528\u9014/\u9762\u79EF", name: "dateRange2" },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9\u5BA1\u6279\u5458", style: { width: 80 } },
                                react_1["default"].createElement(Option, { value: "xiao" }, "\u4ED8\u6653\u6653"),
                                react_1["default"].createElement(Option, { value: "mao" }, "\u5468\u6BDB\u6BDB")),
                            react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9\u5BA1\u6279\u5458", style: { width: 200 } },
                                react_1["default"].createElement(Option, { value: "xiao" }, "\u4ED8\u6653\u6653"),
                                react_1["default"].createElement(Option, { value: "mao" }, "\u5468\u6BDB\u6BDB")))))))));
};
exports["default"] = UpdateForm;
