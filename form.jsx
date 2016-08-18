import React, {Component} from 'react';
import {checkUsername, checkPassword} from './validation';

class Form extends Component {
  constructor(props) {
    // required if we want to invoke `this.`
    super(props);
    this.state = {
      usernameError: '',
      passwordError: '',
      submitButtonEnabled: false
    };
  }

  render() {
    return <form onSubmit={this._onSubmit.bind(this)}>
      <div>
        <input type="text"
               onChange={this._onUsernameChanged.bind(this)}
               onBlur={this._checkUsername.bind(this)}
        />
        <span>{this.state.usernameError}</span>
      </div>
      <div>
        <input type="password"
               onChange={this._onPasswordChange.bind(this)}
               onBlur={this._checkPassword.bind(this)}
        />
        <span>{this.state.passwordError}</span>
      </div>
      <div>
        <button type="submit" disabled={this.state.submitButtonEnabled ? '' : 'disabled'}>
          注册
        </button>
      </div>
    </form>;
  }

  _onUsernameChanged(event) {
    this.setState({
      username: event.target.value,
      usernameError: ''
    }, () => this._determineIfEnableSubmitButton());
  }

  _checkUsername(event) {
    if (checkUsername(event.target.value)) {
      this.setState({usernameError: ''});
    } else {
      this.setState({usernameError: '用户名长度必须>=6'});
    }
  }

  _onPasswordChange(event) {
    this.setState({
      password: event.target.value,
      passwordError: ''
    }, () => this._determineIfEnableSubmitButton());
  }

  _checkPassword(event) {
    const password = event.target.value;
    if (checkPassword(password)) {
      this.setState({passwordError: ''});
    } else {
      this.setState({passwordError: '密码长度必须>=10'})
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    alert('will submit: ' + this.state.username + ', ' + this.state.password);
  }

  _determineIfEnableSubmitButton() {
    const canSubmit = checkUsername(this.state.username) && checkPassword(this.state.password);
    this.setState({
      submitButtonEnabled: canSubmit
    });
  }
}

export default Form;