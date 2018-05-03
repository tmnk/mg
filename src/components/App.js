import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tasks from './Notes/Tasks'
import FriendList from './Friends/FriendList'
import FriendDisplay from './MainPage/FriendDisplay'
import {tasks} from '../fixtures'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import ActionLockOutline from 'material-ui/svg-icons/action/lock-outline';

import {List, ListItem} from 'material-ui/List';

const feedIcon = <ActionPermIdentity />;
const friendsIcon = <ActionSupervisorAccount />;
const exitIcon = <ActionLockOutline />;



const DEFAULT_SECTION = 0;
const TASKS_SECTION = 0;
const FRIENDS_SECTION = 1;
const EXIT_SECTION = 2;
const EMPTY_MAIN_CONTENT = 0;
class App extends Component {

    state = {
        section : 0,
        notes : tasks[0].tasks,
        right : EMPTY_MAIN_CONTENT,
        friends : tasks[0].friends,
        selectedIndex: 0,
        img : tasks[0].img,
        name : tasks[0].name
    }
    changeStatus = (id, status) => {
        this.state.notes.forEach((note, i) => {
            if (note.id == id) {
                this.state.notes[i].status = status;
            }

            console.log(i, note)
        })
    }
    addTask = (newList) => {
        this.setState({notes: newList});
    }
    handleGoToFriend = (id) => {
        let friendInfo = tasks.filter((e) => e.id == id)[0]                       //!!!
        // debugger;
        this.setState({right : friendInfo, img : friendInfo.img, name : friendInfo.name})
    }
    handleAddFriend = () => {}
    handleRemoveFriend = () => {}
    onAddFriendTask = (newNote) => {
        var newList = this.state.notes.slice();
        newList.unshift(newNote);
        this.setState({notes: newList, section : this.state.section});
    }

    render() {
        const content = (this.state.section == TASKS_SECTION ? <Tasks changeStatus={this.changeStatus} notes={this.state.notes} onNoteAdd={this.addTask} /> : (this.state.section == FRIENDS_SECTION ? <FriendList onGoToFriend={this.handleGoToFriend} friends={tasks} /> : 0 ))
        console.log(this.state)
        return (
        <div className="row">
            <div className="main col s3 blue lighten-5 list-container">
                <List>
                    <ListItem
                        leftAvatar={<img className="friendListFace" src={this.state.img} />}
                        primaryText={this.state.name}
                      />
                </List>
                  <Paper zDepth={1}>
                    <BottomNavigation selectedIndex={this.state.section}>
                      <BottomNavigationItem
                        label="Home"
                        icon={feedIcon}
                        onClick={() => this.setState({section : TASKS_SECTION})}
                      />
                      <BottomNavigationItem
                        label="Friends"
                        icon={friendsIcon}
                        onClick={() => this.setState({section : FRIENDS_SECTION})}
                      />
                      <BottomNavigationItem
                        label="Exit"
                        icon={exitIcon}
                        onClick={() => {this.setState({section : EXIT_SECTION}); this.props.onExit(true);}}
                      />
                    </BottomNavigation>
                  </Paper>
                <div className="left-content">
                    {content}
               </div>
            </div>

                <div className="right-content col s9 main-content">
                    {this.state.right ? <FriendDisplay onAddFriendTask={this.onAddFriendTask} onAddFriend={this.handleAddFriend} onRemoveFriend={this.handleRemoveFriend} content={this.state.right} /> : ""}
               </div>
        </div>

        )
    }
}

export default App