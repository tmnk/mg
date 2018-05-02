import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Tasks from './Tasks'
import Friends from './Friend'
import {tasks} from '../fixtures'
const DEFAULT_SECTION = 0;
const TASKS_SECTION = 0;
const FRIENDS_SECTION = 1;
const EXIT_SECTION = 2;
class App extends Component {

    state = {
        section : 0,
        notes : tasks[0].tasks,
        right : "",
        friends : tasks[0].friends
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

                <div className="nav ">
                    <button className={ this.state.section === 0 ? "current section" : "section" } onClick={this.handleChangeSectionTasks}>Tasks</button>
                    <button className={ this.state.section === 1 ? "current section" : "section" } onClick={this.handleChangeSectionFriends}>Friends</button>
                    <button className={ this.state.section === 2 ? "current section" : "section" } onClick={this.handleChangeSectionWall}>Exit</button>
                </div>
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