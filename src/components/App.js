import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tasks from './Notes/Tasks'
import FriendList from './Friends/FriendList'
import FriendDisplay from './MainPage/FriendDisplay'
// import {tasks} from '../fixtures'
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
        notes : this.props.tasks[0].tasks,
        right : EMPTY_MAIN_CONTENT,
        friends : this.props.tasks[0].friends,
        selectedIndex: 0,
        img : this.props.tasks[0].img,
        name : this.props.tasks[0].name,
        currImg : this.props.tasks[0].img,
        currName : this.props.tasks[0].name,
        tasks : this.props.tasks,
        idFriend : 0
    } 
    changeStatus = (id, status) => {
        this.state.notes.forEach((note, i) => {
            if (note.id == id) {
                this.state.notes[i].status = status;
                this.state.tasks[0].tasks[i].status = status;
                $.ajax({
                  url:`http://localhost:3000/upTask?id=${encodeURIComponent(this.state.tasks[0].tasks[i].id)}&status=${encodeURIComponent(this.state.tasks[0].tasks[i].status)}&pbl=${encodeURIComponent(1)}`,
                  type:'POST',
                  // headers: {"access-control-allow-origin", "*" },
                  dataType:"json",
                  // data: {"data":"gg"},
                  success: function (data) {
                      alert( "Succes" );
                  },
                  error:function (data) {
                      alert( "error" );
                  }
                })
            }

            // console.log(i, note)
        })
    }
    changePbl = (id, pbl) => {
        this.state.notes.forEach((note, i) => {
            if (note.id == id) {
                this.state.notes[i].pbl = pbl;
                this.state.tasks[0].tasks[i].pbl = pbl;
                $.ajax({
                  url:`http://localhost:3000/upTask?id=${encodeURIComponent(this.state.tasks[0].tasks[i].id)}&status=${encodeURIComponent(this.state.tasks[0].tasks[i].status)}&pbl=${encodeURIComponent(this.state.tasks[0].tasks[i].pbl)}`,
                  type:'POST',
                  // headers: {"access-control-allow-origin", "*" },
                  dataType:"json",
                  // data: {"data":"gg"},
                  success: function (data) {
                      alert( "Succes" );
                  },
                  error:function (data) {
                      alert( "error" );
                  }
                })
            }

        })
    }

    addTask = (newList) => {
        debugger
        this.setState({notes: newList});
        this.state.tasks[0].tasks = newList;
        $.ajax({
          url:`http://localhost:3000/newTask?id=${encodeURIComponent(this.props.tasks[0].id)}&body=${encodeURIComponent(newList[0].text)}`,
          type:'POST',
          // headers: {"access-control-allow-origin", "*" },
          dataType:"json",
          // data: {"data":"gg"},
          success: function (data) {
              alert( "Succes" );
          },
          error:function (data) {
              alert( "error" );
          }
        })
    }
    addMessage = (newList) => {
        this.state.tasks.forEach((note, i) => {
            if (note.id == this.state.idFriend) {
                this.state.tasks[i].chat = newList;
                let friendInfo = this.state.tasks.filter((e) => e.id == this.state.idFriend)[0]                       //!!!
                this.setState({right : friendInfo, currImg : friendInfo.img, currName : friendInfo.name, idFriend : id})
                $.ajax({
                  url:`http://localhost:3000/addMess?one=${encodeURIComponent(this.state.tasks[0].id)}&two=${encodeURIComponent(this.state.idFriend)}&whom=${encodeURIComponent(0)}&body=${encodeURIComponent(newList[newList.length - 1].text)}`,
                  type:'POST',
                  // headers: {"access-control-allow-origin", "*" },
                  dataType:"json",
                  // data: {"data":"gg"},
                  success: function (data) {
                      alert( "Succes" );
                  },
                  error:function (data) {
                      alert( "error" );
                  }
                })
            }

        })
    }
    handleGoToFriend = (id) => {
        console.log(this.state.tasks, this.state.notes)
        debugger;
        let friendInfo = this.state.tasks.filter((e) => e.id == id)[0]                       //!!!
        this.setState({right : friendInfo})
    }
    handleAddFriend = () => {}
    handleRemoveFriend = () => {}
    onAddFriendTask = (newNote) => {
        var newList = this.state.notes.slice();
        newList.unshift(newNote);

        this.state.tasks[0].tasks = newList;
        this.setState({notes: newList, section : this.state.section});
    }

    render() {
        const content = (this.state.section == TASKS_SECTION ? <Tasks changePbl={this.changePbl} changeStatus={this.changeStatus} notes={this.state.notes} onNoteAdd={this.addTask} /> : (this.state.section == FRIENDS_SECTION ? <FriendList onGoToFriend={this.handleGoToFriend} friends={this.state.tasks} /> : 0 ))
        console.log(this.state.img)
        return (
        <div className="row">
            <div className="main col s3 blue lighten-5 list-container">
                <List>
                    <ListItem
                        leftAvatar={<img className="friendListFace" src={this.state.currImg} />}
                        primaryText={this.state.currName}
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
                    {this.state.right ? <FriendDisplay avatar={this.state.img} onAddFriendTask={this.onAddFriendTask} onAddFriend={this.handleAddFriend} onRemoveFriend={this.handleRemoveFriend} onAddMessage={this.addMessage} content={this.state.right} /> : ""}
               </div>
        </div>

        )
    }
}

export default App