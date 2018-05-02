import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SignIn extends Component {
	state = {
		login : null,
		password : null
	}

	handleLoginName = (ev) => {
		this.setState({login : ev.target.value})
	}

	handlePasswordName = (ev) => {
		this.setState({password : ev.target.value})
	}

	login = (ev) => {
		if (this.state.login && this.state.password) this.props.onEnterLogin(this.state.login, this.state.password);
	}
	render () {
		return (
			<div className="signIn">
				<div className="signTitle" onClick={()=>this.props.onUpPage()}>Sign Up</div>
				<div className="loginSign">Sign In</div>
					<div>Your login</div>
					<input type="text" placeholder="Your login..." className="signIn-field" onChange={this.handleLoginName} />
					<div>Your password</div>
					<input type="password" placeholder="Your password..." className="signIn-field" onChange={this.handlePasswordName} />
					<button className="reg" onClick={this.login}>Enter</button>
			</div>
		)
	}
} 