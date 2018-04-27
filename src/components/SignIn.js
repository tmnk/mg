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

	render () {
		return {
			<div className="signIn">
			<div className="loginSign">Sign In</div>
				<div>Your login</div>
				<input type="text" placeholder="Your login..." className="signIn-field" onChange={this.handleLoginName} />
				<div>Your password</div>
				<input type="password" placeholder="Your password..." className="signIn-field" onChange={this.handleLoginName} />
			</div>
		}
	}
} 