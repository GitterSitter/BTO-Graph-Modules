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
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("filesSharedWithMeWebpartStrings");
var FilesSharedWithMeWebpart_1 = require("./components/FilesSharedWithMeWebpart");
var appconfig = {
    clientID: "f776dc11-31ca-469d-b388-89113f1fabb0",
    redirectUri: location.origin
};
var scopes = ["User.Read", "Files.Read"];
var defaultFiles = [{ name: "Report1", url: "#", sharedBy: "Per Holmen", sharedDate: "23.07.2017" }, { name: "Report2", url: "#", sharedBy: "Gro Holmen", sharedDate: "12.06.2017" }, { name: "Report3", url: "#", sharedBy: "Trude Holmen", sharedDate: "04.01.2017" }];
/// <reference path="../../../node_modules/msal/out/msal.d.ts" />
//const tt = new Msal.UserAgentApplication(msalconfig.clientID, null, 
//  (errorDes, token, error, tokenType) => {});
var FilesSharedWithMeWebpartWebPart = (function (_super) {
    __extends(FilesSharedWithMeWebpartWebPart, _super);
    function FilesSharedWithMeWebpartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilesSharedWithMeWebpartWebPart.prototype.render = function () {
        var element = React.createElement(FilesSharedWithMeWebpart_1.default, {
            description: this.properties.description,
            files: defaultFiles
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(FilesSharedWithMeWebpartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    FilesSharedWithMeWebpartWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                sp_webpart_base_1.PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return FilesSharedWithMeWebpartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
exports.default = FilesSharedWithMeWebpartWebPart;

//# sourceMappingURL=FilesSharedWithMeWebpartWebPart.js.map
