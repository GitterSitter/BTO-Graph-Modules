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
import { IFilesSharedWithMeWebartState } from './components/IFilesSharedWithMeWebartState';

// import * as request from 'request';
// import * as buffer from "buffer";
// import * as http from "http";
//import * as stream from 'stream';

//import url = require('url');

export default class FilesSharedWithMeWebpartWebPart extends BaseClientSideWebPart<IFilesSharedWithMeWebpartWebPartProps> {

  public render(): void {

    const element: React.ReactElement<IFilesSharedWithMeWebpartProps > = React.createElement(
      
      FilesSharedWithMeWebpart,
      {
        description: this.properties.description        
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
