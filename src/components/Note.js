import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class NoteEditor extends Component {
	state = {
		id : this.props.id,
		status : this.props.status
	}
	changeStatus = (ev) => {
		this.setState({status : !this.state.status})
		this.props.changeStatus(this.state.id, !this.state.status);
	} 
	render () {
		const {id, status} = this.props
		// debugger;
	return (
		<div id={id} onClick={this.changeStatus}  className={ !this.state.status ? "new note" : "complete note"} >
                {this.props.children}
            </div>
            )
        }

}