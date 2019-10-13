import React, { Component } from 'react';
import MemberAccount from "./components/MemberAccount";
import MemberInfo from "./components/MemberInfo";

class App extends Component {
  render() {
    return (
        <div id="main_wrapper">
          <header id="header"></header>
          <section id="section">
            <MemberAccount></MemberAccount>
            <MemberInfo></MemberInfo>
          </section>
          <footer id="footer"></footer>
        </div>
    );
  }
}

export default App;
