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
import EditorPublish from 'material-ui/svg-icons/editor/publish';

import ContentAdd from 'material-ui/svg-icons/content/add';

import SocialPublic from 'material-ui/svg-icons/social/public';
let clickStatus = 0;
export default class NoteEditor extends Component {
	state = {
		id : this.props.id,
		status : this.props.status,
		pbl : this.props.pbl
	}
	changeStatus = (ev) => {
		debugger
		if (clickStatus) {
			clickStatus = 0
			return;
		}
		if (!this.props.inUse) this.setState({status : !this.state.status})
		this.props.changeStatus(this.state.id, !this.state.status, this.props.children);
	} 
	changePbl = () => {
		debugger
		clickStatus = 1;
		this.setState({pbl : !this.state.pbl})
		this.props.changePbl(this.state.id, !this.state.pbl);

	}
	render () {
		const {id, status, pbl} = this.props
		debugger;
		console.log(pbl)
	return (
		<ListItem
	        leftAvatar={<Avatar icon={<ActionAssignment />} backgroundColor={this.state.status ? blue500 : grey500} />}
	        rightIcon={!this.props.inUse ? (this.state.pbl ? <SocialPublic  /> : <SocialPublic onClick={this.changePbl}  />) : <ContentAdd />}
	        primaryText={this.props.children}
	        onClick={this.changeStatus}	
	      />
// <div id={id} onClick={this.changeStatus}  className={ this.state.status ? "new note" : "complete note"} >
  //               {this.props.children}
  //           </div>
  //           )
        )}

}