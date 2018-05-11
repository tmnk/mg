import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NoteList from './NoteList'
import NoteEditor from './NoteEditor'

export default class Tasks extends Component {
	state = {
		notes : this.props.notes,
	}
	addTask = (newNote) => {
		debugger
		var newList = this.state.notes.slice();
		newList.unshift(newNote);
		this.setState({notes: newList});
		this.props.onNoteAdd(newList);
		
	}
	changeStatus = (id, status, body) => {
		this.props.changeStatus(id, status);
	}
	changePbl = (id, pbl) => {  //!!
		// alert(pbl)
		this.props.changePbl(id, pbl);
	}
	render() {
		const notesSorted = this.state.notes.filter((k) => k.status == 0).concat(this.state.notes.filter((k) => k.status > 0))
		return (
			<div> 
				<NoteEditor onNoteAdd={this.addTask} />
				<NoteList inUse={0} changePbl = {this.changePbl}  changeStatus={this.changeStatus} notes = {notesSorted} />
			</div>
			)
	}
}
