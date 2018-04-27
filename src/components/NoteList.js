import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Note from './Note'

export default class NoteList extends Component {
	state = {
		notes : this.props.notes
	}
	handleChangeStatus = (id, status) => {
		this.props.changeStatus(id, status);
	}
	render () {
	const list =  this.props.notes.map(note => <li className="notesLi" key={note.id}>
		<Note changeStatus={this.handleChangeStatus} id={note.id} status={note.status}>{note.text}</Note>
		</li>
		)
	return (<ul>{list}</ul>)
}
}