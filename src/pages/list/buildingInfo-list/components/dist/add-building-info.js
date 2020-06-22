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
;
var cityData = {
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
var CreateForm = function (props) {
    var form = antd_1.Form.useForm()[0]; //经 Form.useForm() 创建的 form 控制实例，不提供时会自动创建
    var Option = antd_1.Select.Option;
    var modalVisible = props.modalVisible, handleAdd = props.onSubmit, onCancel = props.onCancel;
    var okHandle = function () { return __awaiter(void 0, void 0, void 0, function () {
        var fieldsValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, form.validateFields()];
                case 1:
                    fieldsValue = _a.sent();
                    form.resetFields(); //重置一组字段到 initialValues
                    handleAdd(fieldsValue);
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1["default"].createElement(antd_1.Modal, { destroyOnClose: true, title: "\u6DFB\u52A0\u697C\u680B\u4FE1\u606F", visible: modalVisible, onOk: okHandle, onCancel: function () { return onCancel(); }, width: 800 },
        react_1["default"].createElement(antd_1.Form, { form: form },
            react_1["default"].createElement(antd_1.Card, { title: "\u697C\u680B\u4FE1\u606F", className: "text", bordered: false },
                react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u697C\u680B", name: "name" },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9\u697C\u5C42" }, cityData.builds.map(function (province) { return (react_1["default"].createElement(Option, { key: province, value: province }, province)); })))),
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u7C7B\u578B", name: "type" },
                            react_1["default"].createElement(antd_1.Select, { placeholder: "\u8BF7\u9009\u62E9\u7C7B\u578B" }, cityData.types.map(function (province) { return (react_1["default"].createElement(Option, { key: province, value: province }, province)); }))))),
                react_1["default"].createElement(antd_1.Row, { gutter: 16 },
                    react_1["default"].createElement(antd_1.Col, { span: 12 },
                        react_1["default"].createElement(antd_1.Form.Item, { label: "\u697C\u5C42", name: "floorNumber" },
                            react_1["default"].createElement(antd_1.Input, { placeholder: "\u8BF7\u8F93\u5165" }))))),
            react_1["default"].createElement(antd_1.Card, { title: "\u6559\u5BA4\u4FE1\u606F", className: "text", bordered: false },
                react_1["default"].createElement(antd_1.Col, { span: 24 },
                    react_1["default"].createElement(antd_1.Form.Item, { label: "\u5DF2\u6709\u6559\u5BA4" },
                        react_1["default"].createElement(antd_1.Select, { placeholder: "\u697C\u680B", style: { width: 150, marginRight: 6 } }, cityData.rooms.map(function (items) { return (react_1["default"].createElement(Option, { key: items, value: items.name }, items.name)); })),
                        react_1["default"].createElement(antd_1.Select, { placeholder: "\u9762\u79EF \u5BB9\u91CF \u72B6\u6001", style: { width: 300 } }, cityData.rooms.map(function (items) { return (react_1["default"].createElement(Option, { key: items, value: items.usage }, items.usage)); })),
                        react_1["default"].createElement("span", { className: style_less_1["default"].btn },
                            react_1["default"].createElement("a", { href: "" }, "\u542F\u7528"),
                            react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
                            react_1["default"].createElement("a", { href: "" }, "\u5220\u9664"),
                            react_1["default"].createElement(antd_1.Divider, { type: "vertical" }),
                            react_1["default"].createElement("a", { href: "" }, "\u7F16\u8F91"))))),
            react_1["default"].createElement(antd_1.Row, { gutter: 16 }))));
};
exports["default"] = CreateForm;
