import React, { Component } from 'react';
import './App.css';
import Search from "./components/Search";
import Block from "./components/Block";
import Transactions from "./components/Transactions";
import NodeInfo from "./components/NodeInfo";
import Scenario from "./components/Scenario";

class App extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      mode: "main",
      contents: [
        { id: 1, num: "13484980", mined: "0x00192fb10df37c9fb26829eb2cc623cd1bf599e8", time:"37 mins ago" },
        { id: 2, num: "13484979", mined: "0xea674fdde714fd979de3edf0f56aa9716b898ec8", time:"40 mins ago" },
        { id: 3, num: "13484978", mined: "0x829bd824b016326a401d083b33d092293333a830", time:"41 mins ago" }
      ]
    }
  }
  render() {
      return (
        <div className="App">
          <header className="App-header">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <h3>Monitoring Page</h3>
            </nav>
            <div class="container-fluid">
              <Search data={this.state.contents}></Search>
              <div class="row">
               <Block data={this.state.contents}></Block>
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
