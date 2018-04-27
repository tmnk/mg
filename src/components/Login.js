import React, { Component } from 'react'
import PropTypes from 'prop-types'

import App from './App'
const NONE_LOGIN = 0
const COMPLETE_LOGIN = 1
export default class Login extends Component {
	state = {
		status : COMPLETE_LOGIN
	}
	handleExit = (arg) => {
		this.setState({status : NONE_LOGIN})
	}
	render() {
		const body = (this.state.status === COMPLETE_LOGIN ? <App onExit={this.handleExit} /> : 0)
		return (<div>{body}</div>)
	}
}