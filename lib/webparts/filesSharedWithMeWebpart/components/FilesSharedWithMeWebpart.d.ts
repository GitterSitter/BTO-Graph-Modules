import * as React from 'react';
import { IFilesSharedWithMeWebpartProps } from './IFilesSharedWithMeWebpartProps';
import { IFilesSharedWithMeWebartState } from "./IFilesSharedWithMeWebartState";
export default class FilesSharedWithMeWebpart extends React.Component<IFilesSharedWithMeWebpartProps, IFilesSharedWithMeWebartState> {
    getCurrentUserLoginName(success: any, failure: any): void;
    setFilesSharedWithUserToState(): void;
    constructor();
    componentWillMount(): void;
    render(): JSX.Element;
}
