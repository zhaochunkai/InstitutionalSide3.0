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
var style_less_1 = require("./style.less");
var moment_1 = require("moment");
var Option = antd_1.Select.Option;
var validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!'
    },
    number: {
        range: '${label} must be between ${min} and ${max}'
    }
};
var onFinish = function (values) {
    console.log(values);
};
var onChange = function (time, timeString) {
    console.log(time, timeString);
};
var CreateForm = function (props) {
    var resourceInfoVisible = props.resourceInfoVisible, handleAdd = props.onSubmit, onCancel = props.onCancel;
    var okHandle = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    }); };
    return (react_1["default"].createElement(antd_1.Modal, { title: "\u8D44\u6E90\u4FE1\u606F\u4FEE\u6539", destroyOnClose: true, visible: resourceInfoVisible, onOk: okHandle, onCancel: function () { return onCancel(); } },
        react_1["default"].createElement("div", { className: style_less_1["default"].content },
            react_1["default"].createElement(antd_1.Form, { name: "nest-messages", onFinish: onFinish, validateMessages: validateMessages },
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { name: ['resource', 'resourceLibrary'], label: "\u8D44\u6E90\u5E93", className: style_less_1["default"].content_item },
                            react_1["default"].createElement(antd_1.Select, { placeholder: '请选择', className: style_less_1["default"].item_one },
                                react_1["default"].createElement(Option, { value: "Option1" }, "\u8BED\u6587\u8BED\u6587\u8BED\u6587\u8BED\u6587"),
                                react_1["default"].createElement(Option, { value: "Option2" }, "\u6570\u5B66"),
                                react_1["default"].createElement(Option, { value: "Option2" }, "\u7269\u7406"),
                                react_1["default"].createElement(Option, { value: "Option2" }, "\u5316\u5B66"))))),
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, { name: ['resource', 'name'], label: "\u8D44\u6E90\u6807\u9898", rules: [{ required: true, message: '资源标题不能为空' }], className: style_less_1["default"].content_item },
                            react_1["default"].createElement("div", { className: style_less_1["default"].item },
                                react_1["default"].createElement(antd_1.Input, { className: style_less_1["default"].item_ipt, placeholder: '请输入' }),
                                react_1["default"].createElement("span", { className: style_less_1["default"].content_text }, "\u9650\u5236100\u4E2A\u5B57\u7B26"))))),
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, { name: ['resource', 'keyword'], label: "\u5173\u952E\u8BCD", className: style_less_1["default"].content_item },
                            react_1["default"].createElement("div", { className: style_less_1["default"].item },
                                react_1["default"].createElement(antd_1.Input, { className: style_less_1["default"].item_ipt, placeholder: '请输入' }),
                                react_1["default"].createElement("span", { className: style_less_1["default"].content_text }, "\u5173\u952E\u8BCD\u4E4B\u95F4\u7528\u82F1\u6587\u201C,\u201D\u9694\u5F00"))))),
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { name: ['resource', 'type'], label: "\u8D44\u6E90\u7C7B\u578B", rules: [{ required: true, message: '请选择资源类型' }], className: style_less_1["default"].content_item },
                            react_1["default"].createElement(antd_1.Select, { placeholder: '请选择', className: style_less_1["default"].item_one },
                                react_1["default"].createElement(Option, { value: "Option1" }, "\u8BED\u6587\u8BED\u6587\u8BED\u6587\u8BED\u6587"),
                                react_1["default"].createElement(Option, { value: "Option2" }, "\u6570\u5B66"),
                                react_1["default"].createElement(Option, { value: "Option2" }, "\u7269\u7406"),
                                react_1["default"].createElement(Option, { value: "Option2" }, "\u5316\u5B66")))),
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { name: ['resource', 'studyTime'], label: "\u5B66\u4E60\u65F6\u957F", rules: [{ required: true, message: '学习时长不能为空' }], className: style_less_1["default"].content_item },
                            react_1["default"].createElement(antd_1.TimePicker, { className: style_less_1["default"].item_one, onChange: onChange, defaultOpenValue: moment_1["default"]('00:00:00', 'HH:mm:ss'), defaultValue: moment_1["default"]('00:45:00', 'HH:mm:ss') })))),
                react_1["default"].createElement(antd_1.Row, null,
                    react_1["default"].createElement(antd_1.Col, { span: 24 },
                        react_1["default"].createElement(antd_1.Form.Item, { name: ['resource', 'description'], label: "\u8D44\u6E90\u63CF\u8FF0", className: style_less_1["default"].content_item },
                            react_1["default"].createElement(antd_1.Input.TextArea, { className: style_less_1["default"].item_last, placeholder: '请输入' }))))))));
};
exports["default"] = CreateForm;
