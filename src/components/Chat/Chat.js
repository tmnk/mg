import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatList from './ChatList'
import ChatEditor from './ChatEditor'

export default class Chat extends Component {
	state = {
		chat : this.props.chat ? this.props.chat : [],
	}
	addTask = (newMessage) => {
		var newList = this.state.notes.slice();
		newList.unshift(newChat);
		this.setState({notes: newList});
		this.props.onChatAdd(newList);
	}
	changeStatus = (id, status, body) => {
		this.props.changeStatus(id, status);
	}
	render() {
		return (
			<div> 
				<ChatList notes = {this.state.chat} />
				<ChatEditor onChatAdd={this.addTask} />
			</div>
			)
	}
}
