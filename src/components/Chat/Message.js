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

export default class Message extends Component {
	state = {
		id : this.props.id,
	}

	render () {
		const {id, whom} = this.props
		let content = ""
		console.log(whom)
		if (parseInt(whom)) {
			content = 		<ListItem
						        rightAvatar={<img className="friendListFace" src={this.props.avatar.u} />}
						        primaryText={this.props.children}
						      />
		}
		else {
			content = 		<ListItem
			       leftAvatar={<img className="friendListFace" src={this.props.avatar.f} />}
			        primaryText={this.props.children}
			      />
		}
		debugger
	return (
		<List>{content}</List>

        )}

}