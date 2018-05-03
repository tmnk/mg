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
	render() {
		// debugger
		return (
			<div> 
				<ChatList chat = {this.state.chat} avatar={this.props.avatar} />
				<ChatEditor onChatAdd={this.addTask} />
			</div>
			)
	}
}
