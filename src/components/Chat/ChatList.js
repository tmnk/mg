import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Note from './Note'
import {List} from 'material-ui/List';

export default class NoteList extends Component {
	state = {
		notes : this.props.notes
	}
	handleChangeStatus = (id, status, body) => {
		this.props.changeStatus(id, status, body);
	}
	render () {
	const list =  this.props.notes.map(note =>
		<Note key={note.id} changeStatus={this.handleChangeStatus} id={note.id} status={note.status}>{note.text}</Note>
		)
	return (<List>{list}</List>)
}
}