import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Message from './Message'
import {List} from 'material-ui/List';

export default class ChatList extends Component {
	state = {
		chat : this.props.chat
	}
	render () {
	 debugger
	const list =  this.props.chat.map(message =>
		<Message key={message.id} avatar={this.props.avatar} whom={message.whom}>{message.text}</Message>
		)
	return (<div>{list}</div>)
}
}