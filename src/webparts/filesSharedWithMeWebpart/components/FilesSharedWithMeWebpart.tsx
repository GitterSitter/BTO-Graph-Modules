import * as React from 'react';
import styles from './FilesSharedWithMeWebpart.module.scss';
import { IFilesSharedWithMeWebpartProps } from './IFilesSharedWithMeWebpartProps';
import { IFilesSharedWithMeWebartState } from "./IFilesSharedWithMeWebartState";
import * as jQuery from "jQuery";
import * as moment from 'moment';

const tenantUrl = "https://bergento.sharepoint.com";

export default class FilesSharedWithMeWebpart extends React.Component<IFilesSharedWithMeWebpartProps, IFilesSharedWithMeWebartState> {

  getCurrentUserLoginName(success, failure) {

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
}
setFilesSharedWithUserToState(){
var that = this;
 var filesresult = Array<{Author, Path, LastModifiedTimeMoment, LastModifiedTime, Title}>();  
  this.getCurrentUserLoginName(function(loginName){
    //var query = tenantUrl + "/_api/search/query?querytext='(SharedWithUsersOWSUSER:dag.finne@bergento.com)'";
    var query = tenantUrl + "/_api/search/query?querytext='(SharedWithUsersOWSUSER:"+ loginName +")'";
    
        jQuery.ajax({
            url: query, 
            method: "GET",
            headers: { "Accept": "application/json" }, 
            success: function (data) {
                var files = data.PrimaryQueryResult.RelevantResults.Table.Rows;  
                
                if (files !== "")
                {    
                  files.forEach(element => {
                      var table = element.Cells;
                      var result = {
                        "Author": table.filter(d => d.Key === "Author")[0].Value.replace(';', ', '),
                        "Path": table.filter(d => d.Key === "ServerRedirectedURL")[0].Value,
                        "LastModifiedTimeMoment" : moment(table.filter(d => d.Key === "LastModifiedTime")[0].Value).format("DD.MM.YYYY"),
                        "LastModifiedTime": table.filter(d => d.Key === "LastModifiedTime")[0].Value,
                        "Title": table.filter(d => d.Key === "Title")[0].Value
                    };

                  //No data from test-environment is interesting! && result.Path.toString().indexOf(tenantUrl+"/sites/pobto") < 0?
                  if (result.Path.toString().indexOf(tenantUrl+"/gatewaytest") < 0 )
                    filesresult.push(result);
                  });

                  filesresult = filesresult.sort(function(a,b){
                    return (a.LastModifiedTime < b.LastModifiedTime) ? 1 : -1;                    
                  });
                  filesresult = filesresult.slice(0, 19); 
                  that.setState({...that.state, files: filesresult});
                }          
            },
            error: function (data) {                
                 console.log("Error: " + data);
            }
                
        });
         
  }, function(data){
    console.log("Error: " + data);
  });
}

    constructor(){
    super();
    this.state = {
      files: Array<{Author, Path, LastModifiedTimeMoment, LastModifiedTime, Title}>()
    }
  }

  public componentWillMount(){     
    this.setFilesSharedWithUserToState();
  }
 
 
  render(){    
    //if (this.state.files.length > 0){
    var thisFiles = this.state.files.map(file =>{
        return(           
           <div className={styles.row} key={`${file.Title}key`}>
             <div className={styles.cell}><a href={file.Path}>{file.Title}</a></div>
             <div className={styles.cell}>{file.Author}</div>
             <div className={styles.cell}>{file.LastModifiedTimeMoment}</div>
           </div>                 
        );
        });
    return(
      this.state.files !== null && this.state.files.length > 0?
      <div className={styles.filesSharedWithMeWebpart}>
        <div className={styles.container}>          
            <div className={styles.table}>
              <div className={styles.thead}>
                <header className={styles.cell}>File</header>
                <header className={styles.cell}>Author</header>
                <header className={styles.cell}>Last modified</header>
              </div>                             
              {thisFiles}              
              </div>              
            </div>          
      </div>
      : <div></div>
    );
  }
}
