"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FilesSharedWithMeWebpart_module_scss_1 = require("./FilesSharedWithMeWebpart.module.scss");
var FilesSharedWithMeWebpart = (function (_super) {
    __extends(FilesSharedWithMeWebpart, _super);
    function FilesSharedWithMeWebpart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilesSharedWithMeWebpart.prototype.render = function () {
        var files = this.props.files.map(function (file) {
            return (React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.row, key: file.name + "key" },
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell },
                    React.createElement("a", { href: file.url }, file.name)),
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, file.sharedBy),
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, file.sharedDate)));
        });
        return (React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.filesSharedWithMeWebpart },
            React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.container },
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.table },
                    React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.thead },
                        React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "File"),
                        React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "Shared by"),
                        React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "Shared by date")),
                    files))));
    };
    return FilesSharedWithMeWebpart;
}(React.Component));
exports.default = FilesSharedWithMeWebpart;

//# sourceMappingURL=FilesSharedWithMeWebpart.js.map
