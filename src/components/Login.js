import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SignIn from './Sign/SignIn'
import SignUp from './Sign/SignUp'

import App from './App'
const NONE_LOGIN = 0
const COMPLETE_LOGIN = 1
const SIGN_IN_PAGE = 2
const SIGN_UP_PAGE = 3
export default class Login extends Component {
	state = {
		status : NONE_LOGIN,
		activePage : SIGN_IN_PAGE,
		auth : ''
	}
	successF = (e) => {
		if (e.length > 1) {
			console.log(e)
			this.setState({status : COMPLETE_LOGIN, auth: e})
		}
		else {
			alert("Wrong password or login")
		}
	}
	handleEnter = (log, pass) => {
		var successF = this.successF;
		var res;
		var met = '';
		if (this.state.activePage === SIGN_UP_PAGE) met = 'new'
		 $.ajax({
          url:`http://localhost:3000/${met}login?login=${encodeURIComponent(log)}&password=${encodeURIComponent(pass)}`,
          type:'POST',
          // headers: {"access-control-allow-origin", "*" },
          dataType:"json",
          // data: {"data":"gg"},
          success: successF,
          error:function (data) {
              console.log( data );
          },
           // beforeSend : SendXhr
      });
		 // var timerId = setTimeout(() => { 		 
		 // 	if (res) {
			// 	if (res === "complete") this.gogo()
			// 	alert(this.state.status)
			// 	res = ''
			// 	clearTimeout(timerId);
			// } }, 300);
	}
	onUpPage =() => {this.setState({activePage : SIGN_UP_PAGE})}
	onInPage= ()  => {this.setState({activePage : SIGN_IN_PAGE})}
	handleExit = (arg) => {
		this.setState({status : NONE_LOGIN})
	}
	render() {
		const body = (this.state.status === COMPLETE_LOGIN ? <App tasks={this.state.auth} onExit={this.handleExit} /> : (this.state.activePage === SIGN_IN_PAGE ? <SignIn onUpPage={this.onUpPage} onEnterLogin={this.handleEnter} /> : <SignUp onInPage={this.onInPage}  onRegLogin={this.handleReg} />))
		return (
  <MuiThemeProvider>{body}</MuiThemeProvider>)
	}
}