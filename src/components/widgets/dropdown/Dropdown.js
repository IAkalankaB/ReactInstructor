import React, { Component } from "react";
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';


class Dropdown extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick() {
    this.setState({
      open: true
    });
  }
  container = React.createRef();
  state = {
    open: false
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container" ref={this.container} >
          <AccountCircleSharpIcon
            type="button"
            className="button"
            onClick={this.handleButtonClick}
            />
          {this.state.open && (
            <div className="dropdown" >
              <ul>
                <h2 style={{padding:10,fontWeight:'lighter'}}>My Account</h2>
                <hr/>
                <li><a href="account">Account Settings</a></li>
                <li><a href="signout"> Sign out</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Dropdown;
