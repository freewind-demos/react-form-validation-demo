import React, {Component} from 'react';
import {checkUsername, checkPassword} from './validation';

class Hello extends Component {
  constructor(props) {
    // required if we want to invoke `this.`
    super(props);
    this.state = {
      // this is required,
      // otherwise we will get an warning like
      // Warning: Hello is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.
      username: '',
      password: '',
      usernameError: '',
      passwordError: ''
    };
  }

  render() {
    return <form onSubmit={this._onSubmit.bind(this)}>
      <div>
        <input type="text"
               value={this.state.username}
               onChange={this._onUsernameChanged.bind(this)}
               onBlur={this._checkUsername.bind(this)}
        />
        <span>{this.state.usernameError}</span>
      </div>
      <div>
        <input type="password"
               value={this.state.password}
               onChange={this._onPasswordChange.bind(this)}
               onBlur={this._checkPassword.bind(this)}
        />
        <span>{this.state.passwordError}</span>
      </div>
      <div>
        <button type="submit">注册</button>
      </div>
      <hr />
      <div>
        <div>Username: {this.state.username}</div>
        <div>Password: {this.state.password}</div>
      </div>
    </form>;
  }

  _onUsernameChanged(event) {
    this.setState({
      username: event.target.value,
      usernameError: ''
    });
  }

  _checkUsername(event) {
    var username = event.target.value;
    if (checkUsername(username)) {
      this.setState({usernameError: ''});
    } else {
      this.setState({usernameError: '用户名不合法'});
    }
  }

  _onPasswordChange(event) {
    this.setState({
      password: event.target.value,
      passwordError: ''
    });
  }

  _checkPassword(event) {
    const password = event.target.value;
    if (checkPassword(password)) {
      this.setState({passwordError: ''});
    } else {
      this.setState({passwordError: '密码不合法'})
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    alert('submitted!');
  }
}

export default Hello;