import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatList from './ChatList'
import ChatEditor from './ChatEditor'

export default class Chat extends Component {
	state = {
		chat : this.props.chat ? this.props.chat : [],
	}
	addTask = (newMessage) => {
		var newList = this.state.chat.slice();
		newList.push(newMessage);

		this.setState({chat: newList});
		this.props.onAddMessage(newList);
	}
	render() {
		this.state.chat = this.props.chat ? this.props.chat : [];
		debugger
		return (
			<div> 
				<ChatList chat = {this.state.chat} avatar={this.props.avatar} />
				<ChatEditor onMessageAdd={this.addTask} />
			</div>
			)
	}
}
