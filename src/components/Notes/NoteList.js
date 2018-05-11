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
	changePbl = (id, pbl) => {

		// alert(!this.props.changePbl)
		if (this.props.changePbl) this.props.changePbl(id, pbl);
	}
	render () {
	let after = this.props.notes;
	debugger
	if (this.props.inUse) after = after.filter((el) => el.pbl == null || el.pbl == 1)
	const list =  after.map(note =>
		<Note key={note.id} inUse={this.props.inUse} changePbl={this.changePbl} changeStatus={this.handleChangeStatus} pbl={note.pbl == null ? 1 : 0} id={note.id} status={note.status}>{note.text}</Note>
		)
	return (<List>{list}</List>)
}
}