import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ActionQuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import ActionDonutSmall from 'material-ui/svg-icons/action/donut-small';

import NoteList from '../Notes/NoteList'
import Chat from '../Chat/Chat'
const TASKS_FRIEND = 0;
const CHAT_FRIEND = 1;
export default class FriendItem extends Component {
	state = {
		section : TASKS_FRIEND,
		chat: this.props.content.chat
	}
	handleAddTask = (id, status, body) => {
		var newNote = {
            text: body,
            status: 0,
            pbl:0,
            id: Date.now()
        };
        this.props.onAddFriendTask(newNote);
	}
	handleAddMessage = (newList) => {   //!!!
		this.props.onAddMessage(newList);
		this.setState({chat: newList})
	}

	render() {
		let addButton = this.props.content.isFriend ? <ContentRemove onClick={() => this.props.onRemoveFriend(this.props.id)} /> : <ContentAdd onClick={() => this.props.onAddFriend(this.props.id)} />;
		const style = {
		  marginRight: 20,
		};

		debugger
		let content = (this.state.section === TASKS_FRIEND) ? <NoteList inUse={1}  changeStatus={this.handleAddTask} notes = {this.props.content.tasks} /> : <Chat onAddMessage={this.handleAddMessage} chat={this.state.chat} avatar={{"u":this.props.avatar, "f":this.props.content.img}} />
		return (
		<div>
            <div className="friend info"> 
				<div className="friendMenu">
					<FloatingActionButton style={style}>
				      {addButton}
				    </FloatingActionButton>
				    <FloatingActionButton style={style} onClick={()=>this.setState({section : CHAT_FRIEND})}>
				      <ActionQuestionAnswer />
				    </FloatingActionButton>
				    <FloatingActionButton style={style} onClick={()=>this.setState({section : TASKS_FRIEND})}>
				      <ActionDonutSmall />
				    </FloatingActionButton>
				</div>
				{content}
            </div>
        </div>
        )
	}
}