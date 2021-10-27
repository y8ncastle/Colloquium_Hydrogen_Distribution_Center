import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search";
import Block from "./components/Block";
import Transactions from "./components/Transactions";
import NodeInfo from "./components/NodeInfo";
import Scenario from "./components/Scenario";

class App extends Component {
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <h3>Monitoring Page</h3>
            </nav>
            <div class="container-fluid">
              <Search></Search>
              <div class="row">
                <Block></Block>
                <Transactions></Transactions>
              </div>
              <div class="row">
                <NodeInfo></NodeInfo>
                <Scenario></Scenario>
              </div>
            </div>
          </header>
        </div>
      );
  }
}

export default App;
