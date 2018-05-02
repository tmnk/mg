import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SignUp extends Component {
	state = {
		login : null,
		password : null,
		img : "https://pp.userapi.com/c631624/v631624307/3b149/5BX1aC0tQnY.jpg"
	}

	handleLoginName = (ev) => {
		this.setState({login : ev.target.value})
	}

	handlePasswordName = (ev) => {
		this.setState({password : ev.target.value})
	}
	handleName = (ev) => {
		this.setState({name : ev.target.value})
	}

	login = (ev) => {
		if (this.state.login && this.state.password) this.props.onEnterLogin(this.state.login, this.state.password,this.state.img);
	}
	render () {
		return (
			<div className="signUp">
				<div className="signTitle" onClick={()=>this.props.onInPage()}>Sign In</div>
				<div className="loginSign">Sign Up</div>
					<div>Your login</div>
					<input type="text" placeholder="Your login..." className="signUp-field" onChange={this.handleLoginName} />
					<div>Your password</div>
					<input type="password" placeholder="Your password..." className="signUp-field" onChange={this.handlePasswordName} />
					<button className="reg" onClick={this.login}>Enter</button>
			</div>
		)
	}
} 