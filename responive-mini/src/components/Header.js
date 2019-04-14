import React, { Component } from "react";
import "./header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }
  // prevState says, in the CB to take previouse state and change it from what it was.
  toggler = () => {
    this.setState(prevState => {
      return {
        toggle: !prevState.toggle
      };
    });
  };

  render() {
    console.log(this.state.toggle);
    return (
      <header className="header-container">
        <div>
          <div className="logo">My Logo</div>
          <button onClick={this.toggler}>Menu</button>
          <ul className={this.state.toggle ? "show" : "hide"}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Staff</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

export default Header;
