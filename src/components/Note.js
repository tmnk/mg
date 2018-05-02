import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600, grey500} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';

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
		<ListItem
	        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={this.state.status ? blue500 : grey500} />}
	        rightIcon={<ActionInfo />}
	        primaryText={this.props.children}
	        onClick={this.changeStatus}
	      />
// <div id={id} onClick={this.changeStatus}  className={ this.state.status ? "new note" : "complete note"} >
  //               {this.props.children}
  //           </div>
  //           )
        )}

}