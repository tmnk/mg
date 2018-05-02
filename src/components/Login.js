import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SignIn from './SignIn'
import SignUp from './SignUp'

import App from './App'
const NONE_LOGIN = 0
const COMPLETE_LOGIN = 1
const SIGN_IN_PAGE = 2
const SIGN_UP_PAGE = 3
export default class Login extends Component {
	state = {
		status : COMPLETE_LOGIN,
		activePage : SIGN_IN_PAGE
	}
	handleEnter = (log, pass) => {
		let res;
		 $.ajax({
          url:`http://localhost:3000/login?login=${encodeURIComponent(log)}&password=${encodeURIComponent(pass)}`,
          type:'POST',
          // headers: {"access-control-allow-origin", "*" },
          dataType:"json",
          // data: {"data":"gg"},
          success: function(data) {
            alert(data.auth);
            res = data;
          
          },
          error:function (data) {
              console.log( data );
          },
           // beforeSend : SendXhr
      });
		if (res.auth === "complete") this.setState({status : COMPLETE_LOGIN})
			console.log(res == "complete")
	}
	onUpPage =() => {this.setState({activePage : SIGN_UP_PAGE})}
	onInPage= ()  => {this.setState({activePage : SIGN_IN_PAGE})}
	handleExit = (arg) => {
		this.setState({status : NONE_LOGIN})
	}
	render() {
		const body = (this.state.status === COMPLETE_LOGIN ? <App onExit={this.handleExit} /> : (this.state.activePage === SIGN_IN_PAGE ? <SignIn onUpPage={this.onUpPage} onEnterLogin={this.handleEnter} /> : <SignUp onInPage={this.onInPage}  onRegLogin={this.handleReg} />))
		return (<div>{body}</div>)
	}
}