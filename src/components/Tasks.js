import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NoteList from './NoteList'
import NoteEditor from './NoteEditor'

export default class Tasks extends Component {
	state = {
		notes : this.props.notes,
	}
	addTask = (newNote) => {
		var newList = this.state.notes.slice();
		newList.push(newNote);
		this.setState({notes: newList});
		this.props.onNoteAdd(newList);
	}
	changeStatus = (id, status) => {
		this.props.changeStatus(id, status);
	}
	render() {
		console.log(this.state.notes)
		return (
			<div> 
				<NoteEditor onNoteAdd={this.addTask} />
				<NoteList changeStatus={this.changeStatus} notes = {this.state.notes} />
			</div>
			)
	}
}
