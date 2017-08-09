import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as request from 'request';
// import * as buffer from "buffer";
// import * as http from "http";
import * as WebRequest from 'web-request';

console.log("oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
(async function () {
 // getCurrentUserSP();
    // var result = await  WebRequest.get('http://www.bt.no');
    // console.log(result.content + " ååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååååå");
    //  console.log("");

// var test = await WebRequest.get('http://xyzzy.com/123', {throwResponseError: true});
//  console.log(test);
//  headers: {
    //     'Content-Type': 'application/json'
    // }

    let req = {
    url: 'https://bouvetasa.sharepoint.com/_api/web/currentuser',  //http://xyzzy.com/123
    method: 'GET',
    header: {
      'Access-Control-Allow-Origin': '*',
      'User-Agent': 'Super Agent/0.0.1',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  

    //  Content-Type, Accept", X-Requested-With,
    }
};

request(req, function (err, res, body) {
   // this.config = JSON.parse(body);
    console.log("response => " + body +  "|||" + res);
});

    // var result = await WebRequest.get('http://www.google.com/');
    // console.log(result.content);
})();



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
