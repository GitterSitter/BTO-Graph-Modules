import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
 
import * as strings from 'filesSharedWithMeWebpartStrings';
import FilesSharedWithMeWebpart from './components/FilesSharedWithMeWebpart';
import { IFilesSharedWithMeWebpartProps } from './components/IFilesSharedWithMeWebpartProps';
import { IFilesSharedWithMeWebpartWebPartProps } from './IFilesSharedWithMeWebpartWebPartProps';

// import * as request from 'request';
// import * as buffer from "buffer";
// import * as http from "http";
//import * as stream from 'stream';
//import * as WebRequest from 'web-request';
//import url = require('url');
import * as request from 'request';
console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
(async function () {
 // getCurrentUserSP();
    // var result = await  WebRequest.get('http://www.bt.no');
    // console.log(result.content + " ååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååå");
    //  console.log("");

    let req = {
    url:  'https://www.bt.no', // 'https://bouvetasa.sharepoint.com/_api/web/currentuser',
    method: 'GET',
    header: {
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Super Agent/0.0.1',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
    }
};

  //var test = await WebRequest.get('http://xyzzy.com/123', {throwResponseError: true});
 
// request(req, function (err, res, body) {
//    // this.config = JSON.parse(body);
//     console.log("response => " + res + body);
// });

})();



// function getCurrentUserSP() {
//   var ur = 'https://bouvetasa.sharepoint.com/_api/web/currentuser';
//   var opt = {
//     url: ur,
//       method: "GET",
//     header: {
//       'User-Agent': 'Super Agent/0.0.1',
//       'Content-Type': 'application/x-www-form-urlencoded',
      
//     }
//   }

//   request(opt, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(error + "***********");
//       return error;
//     } else {
//       //response.statusCode +s
//       console.log( " aaaaaaaaa " + response + body);
//       return response;
//     }
//   });
// }

//getCurrentUserSP();



// getCurrentUserSP();
// console.log("Done");
// function sharedWithMe() {
//   var ur = 'https://bouvetasa.sharepoint.com/_api/search/query?querytext=%27(SharedWithUsersOWSUSER:trond.tufte@bouvet.no)%27';
//   var opt = {
//     url: ur,
//   //    method: "GET",
//     header: {
//       'User-Agent': 'Super Agent/0.0.1',
//       'Content-Type': 'application/x-www-form-urlencoded',
      
//     }
//   }
//   request(opt, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       console.log(error);
//       return error;
//     } else {
//       //response.statusCode +s
//       console.log( " " + response.value + body);
//       return response;
//     }
//   });
// }


const appconfig = {
    clientID: "f776dc11-31ca-469d-b388-89113f1fabb0", // Azure AD Application ID    
    redirectUri: location.origin
};

//  getCurrentUserSP();


const scopes = ["User.Read", "Files.Read"];

const defaultFiles = [{name:"Report1",url:"#", sharedBy:"Per Holmen", sharedDate: "23.07.2017"}, {name:"Report2",url:"#", sharedBy:"Gro Holmen", sharedDate: "12.06.2017"}, {name:"Report3",url:"#", sharedBy:"Trude Holmen", sharedDate: "04.01.2017"}];

/// <reference path="../../../node_modules/msal/out/msal.d.ts" />
//const tt = new Msal.UserAgentApplication(msalconfig.clientID, null, 
//  (errorDes, token, error, tokenType) => {});




export default class FilesSharedWithMeWebpartWebPart extends BaseClientSideWebPart<IFilesSharedWithMeWebpartWebPartProps> {
  public render(): void {
   
   const element: React.ReactElement<IFilesSharedWithMeWebpartProps > = React.createElement(
      FilesSharedWithMeWebpart,
      {
        description: this.properties.description,
        files: defaultFiles
      }
    );

    ReactDom.render(element, this.domElement);
  }

 


  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
