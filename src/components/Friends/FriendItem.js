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
import ActionRowing from 'material-ui/svg-icons/action/rowing';
export default class FriendItem extends Component {
    render () {
        return (
            <ListItem
                leftAvatar={<img className="friendListFace" src={this.props.image} />}
                rightIcon={<ActionInfo />}
                primaryText={this.props.name}
                onClick={this.changeStatus}
              />
            // <li className="contact">
            //     <img className="contact-image" src={this.props.image} width="60px" height="60px" />
            //     <div className="contact-info">
            //         <div className="contact-name"> {this.props.name} </div>
            //     </div>
            // </li>
        );
    }
}