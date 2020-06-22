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
var FormItem = antd_1.Form.Item;
//-------------------------文件上传---------------------------
var UploadFiles = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(antd_1.Upload, { name: "avatar", listType: "picture-card", className: "avatar-uploader", showUploadList: false, action: "https://www.mocky.io/v2/5cc8019d300000980a055e76" },
            react_1["default"].createElement("span", null, "\u70B9\u51FB\u4E0A\u4F20"))));
};
// ---------------------------------------------------------------
var CreateForm = function (props) {
    var form = antd_1.Form.useForm()[0];
    var Option = antd_1.Select.Option;
    var modalVisible = props.modalVisible, handleAdd = props.onSubmit, onCancel = props.onCancel;
    var okHandle = function () { return __awaiter(void 0, void 0, void 0, function () {
        var fieldsValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, form.validateFields()];
                case 1:
                    fieldsValue = _a.sent();
                    form.resetFields();
                    handleAdd(fieldsValue);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(antd_1.Modal, { destroyOnClose: true, title: "\u6DFB\u52A0\u7528\u6237", visible: modalVisible, onOk: okHandle, onCancel: function () { return onCancel(); } },
        react_1["default"].createElement(antd_1.Form, { form: form },
            react_1["default"].createElement(antd_1.Form.Item, { name: "name", label: "\u59D3\u540D", rules: [
                    {
                        required: true,
                        message: '请输入姓名'
                    },
                ] },
                react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165" })),
            react_1["default"].createElement(antd_1.Form.Item, { name: "sex", label: "\u6027\u522B", rules: [
                    {
                        required: true
                    },
                ] },
                react_1["default"].createElement(antd_1.Radio.Group, null,
                    react_1["default"].createElement(antd_1.Radio, { value: "a" }, "\u7537"),
                    react_1["default"].createElement(antd_1.Radio, { value: "b" }, "\u5973"))),
            react_1["default"].createElement(antd_1.Form.Item, { name: "tel", label: "\u624B\u673A", rules: [
                    {
                        required: true,
                        message: '请输入手机号'
                    },
                ] },
                react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165" })),
            react_1["default"].createElement(antd_1.Form.Item, { name: "name", label: "\u8D26\u53F7", rules: [
                    {
                        required: true,
                        message: '请输入账号'
                    },
                ] },
                react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165" })),
            react_1["default"].createElement(antd_1.Form.Item, { name: "passworld", label: "\u5BC6\u7801", rules: [
                    {
                        required: true,
                        message: '请输入密码'
                    },
                ] },
                react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165" })),
            react_1["default"].createElement(antd_1.Form.Item, { name: "select", label: "\u89D2\u8272", hasFeedback: true, rules: [{ required: true, message: '请选择你的角色!' }] },
                react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9" },
                    react_1["default"].createElement(Option, { value: "china" }, "\u8D85\u7EA7\u7BA1\u7406\u5458"),
                    react_1["default"].createElement(Option, { value: "usa" }, "\u7BA1\u7406\u5458"),
                    react_1["default"].createElement(Option, { value: "usa" }, "\u79DF\u6237"))),
            react_1["default"].createElement(antd_1.Form.Item, { name: "select", label: "\u8BC1\u4EF6", hasFeedback: true, rules: [{ required: true }] },
                react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165", style: { width: 298 } }),
                react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9", style: { width: 120 } },
                    react_1["default"].createElement(Option, { value: "china" }, "\u8EAB\u4EFD\u8BC1"),
                    react_1["default"].createElement(Option, { value: "usa" }, "\u6237\u53E3\u672C"),
                    react_1["default"].createElement(Option, { value: "usa" }, "\u62A4\u7167"))),
            react_1["default"].createElement(antd_1.Form.Item, { name: "name", label: "\u5907\u6CE8" },
                react_1["default"].createElement("textarea", { style: { width: 300, height: 200 } })),
            react_1["default"].createElement(antd_1.Form.Item, { name: "select", label: "\u4E0A\u4F20\u7167\u7247" }, UploadFiles()))));
};
exports["default"] = CreateForm;
