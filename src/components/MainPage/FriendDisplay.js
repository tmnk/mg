import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentRemove from 'material-ui/svg-icons/content/remove';
import ActionQuestionAnswer from 'material-ui/svg-icons/action/question-answer';
import ActionDonutSmall from 'material-ui/svg-icons/action/donut-small';

import NoteList from '../Notes/NoteList'
const TASKS_FRIEND = 0;
export default class FriendItem extends Component {
	state = {
		section : TASKS_FRIEND
	}
	handleAddTask = (id, status, body) => {
		var newNote = {
            text: body,
            status: 0,
            id: Date.now()
        };
        this.props.onAddFriendTask(newNote);
	}
	render() {
		let addButton = this.props.content.isFriend ? <ContentRemove onClick={this.props.onRemoveFriend(this.props.id)} /> : <ContentAdd onClick={this.props.onAddFriend(this.props.id)} />;
		const style = {
		  marginRight: 20,
		};
		let content = (this.state.section === TASKS_FRIEND) ? <NoteList changeStatus={this.handleAddTask} notes = {this.props.content.tasks} /> : ""
		return (
		<div>
            <div className="friend info"> 
				<div className="friendMenu">
					<FloatingActionButton style={style}>
				      {addButton}
				    </FloatingActionButton>
				    <FloatingActionButton style={style}>
				      <ActionQuestionAnswer />
				    </FloatingActionButton>
				    <FloatingActionButton style={style}>
				      <ActionDonutSmall />
				    </FloatingActionButton>
				</div>
				{content}
            </div>
        </div>
        )
	}
}