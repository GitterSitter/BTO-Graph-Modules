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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var FilesSharedWithMeWebpart_module_scss_1 = require("./FilesSharedWithMeWebpart.module.scss");
var jQuery = require("jQuery");
var moment = require("moment");
var tenantUrl = "https://bergento.sharepoint.com";
var FilesSharedWithMeWebpart = (function (_super) {
    __extends(FilesSharedWithMeWebpart, _super);
    function FilesSharedWithMeWebpart() {
        var _this = _super.call(this) || this;
        _this.state = {
            files: Array()
        };
        return _this;
    }
    FilesSharedWithMeWebpart.prototype.getCurrentUserLoginName = function (success, failure) {
        var query = tenantUrl + "/_api/web/currentuser";
        // Get currentUserLoginName
        jQuery.ajax({
            url: query,
            method: "GET",
            headers: { "Accept": "application/json; odata=minimalmetadata" },
            success: function (data) {
                success(data.Email);
                //success(data.LoginName.split('|')[2]);
            },
            error: function (data) {
                failure(data);
            }
        });
    };
    FilesSharedWithMeWebpart.prototype.setFilesSharedWithUserToState = function () {
        var that = this;
        var filesresult = Array();
        this.getCurrentUserLoginName(function (loginName) {
            //var query = tenantUrl + "/_api/search/query?querytext='(SharedWithUsersOWSUSER:dag.finne@bergento.com)'";
            var query = tenantUrl + "/_api/search/query?querytext='(SharedWithUsersOWSUSER:" + loginName + ")'";
            jQuery.ajax({
                url: query,
                method: "GET",
                headers: { "Accept": "application/json" },
                success: function (data) {
                    var files = data.PrimaryQueryResult.RelevantResults.Table.Rows;
                    if (files !== "") {
                        files.forEach(function (element) {
                            var table = element.Cells;
                            var result = {
                                "Author": table.filter(function (d) { return d.Key === "Author"; })[0].Value.replace(';', ', '),
                                "Path": table.filter(function (d) { return d.Key === "ServerRedirectedURL"; })[0].Value,
                                "LastModifiedTimeMoment": moment(table.filter(function (d) { return d.Key === "LastModifiedTime"; })[0].Value).format("DD.MM.YYYY"),
                                "LastModifiedTime": table.filter(function (d) { return d.Key === "LastModifiedTime"; })[0].Value,
                                "Title": table.filter(function (d) { return d.Key === "Title"; })[0].Value
                            };
                            //No data from test-environment is interesting! && result.Path.toString().indexOf(tenantUrl+"/sites/pobto") < 0?
                            if (result.Path.toString().indexOf(tenantUrl + "/gatewaytest") < 0)
                                filesresult.push(result);
                        });
                        filesresult = filesresult.sort(function (a, b) {
                            return (a.LastModifiedTime < b.LastModifiedTime) ? 1 : -1;
                        });
                        filesresult = filesresult.slice(0, 19);
                        that.setState(__assign({}, that.state, { files: filesresult }));
                    }
                },
                error: function (data) {
                    console.log("Error: " + data);
                }
            });
        }, function (data) {
            console.log("Error: " + data);
        });
    };
    FilesSharedWithMeWebpart.prototype.componentWillMount = function () {
        this.setFilesSharedWithUserToState();
    };
    FilesSharedWithMeWebpart.prototype.render = function () {
        //if (this.state.files.length > 0){
        var thisFiles = this.state.files.map(function (file) {
            return (React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.row, key: file.Title + "key" },
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell },
                    React.createElement("a", { href: file.Path }, file.Title)),
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, file.Author),
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, file.LastModifiedTimeMoment)));
        });
        return (this.state.files !== null && this.state.files.length > 0 ?
            React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.filesSharedWithMeWebpart },
                React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.container },
                    React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.table },
                        React.createElement("div", { className: FilesSharedWithMeWebpart_module_scss_1.default.thead },
                            React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "File"),
                            React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "Author"),
                            React.createElement("header", { className: FilesSharedWithMeWebpart_module_scss_1.default.cell }, "Last modified")),
                        thisFiles)))
            : React.createElement("div", null));
    };
    return FilesSharedWithMeWebpart;
}(React.Component));
exports.default = FilesSharedWithMeWebpart;

//# sourceMappingURL=FilesSharedWithMeWebpart.js.map
