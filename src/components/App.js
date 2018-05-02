import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tasks from './Notes/Tasks'
import Friends from './Friends/Friend'
import {tasks} from '../fixtures'
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import ActionPermIdentity from 'material-ui/svg-icons/action/perm-identity';
import ActionSupervisorAccount from 'material-ui/svg-icons/action/supervisor-account';
import ActionLockOutline from 'material-ui/svg-icons/action/lock-outline';

const feedIcon = <ActionPermIdentity />;
const friendsIcon = <ActionSupervisorAccount />;
const exitIcon = <ActionLockOutline />;



const DEFAULT_SECTION = 0;
const TASKS_SECTION = 0;
const FRIENDS_SECTION = 1;
const EXIT_SECTION = 2;
class App extends Component {

    state = {
        section : 0,
        notes : tasks[0].tasks,
        right : "",
        friends : tasks[0].friends,
        selectedIndex: 0
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

    handleChangeSectionTasks = () => {
        this.setState({section : TASKS_SECTION})
    }
    handleChangeSectionFriends = () => {
        this.setState({section : FRIENDS_SECTION})
    }
    handleChangeSectionWall = () => {
        this.setState({section : EXIT_SECTION})
        this.props.onExit(true);
    }

    render() {
        const content = (this.state.section == TASKS_SECTION ? <Tasks changeStatus={this.changeStatus} notes={this.state.notes} onNoteAdd={this.addTask} /> : (this.state.section == FRIENDS_SECTION ? <Friends friends={tasks} /> : 0 ))

        return (
        <div className="row">
            <div className="main col s3 blue lighten-5 list-container">

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
                    {this.state.right}
               </div>
        </div>

        )
    }
}

export default App