import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
import { IFilesSharedWithMeWebpartWebPartProps } from './IFilesSharedWithMeWebpartWebPartProps';
export default class FilesSharedWithMeWebpartWebPart extends BaseClientSideWebPart<IFilesSharedWithMeWebpartWebPartProps> {
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
