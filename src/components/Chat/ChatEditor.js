import React, { Component } from 'react'
import PropTypes from 'prop-types'
var NoteEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },

    handleNoteAdd: function(ev) {
        var newNote = {
            text: this.state.text,
            status: 0,
            id: Date.now()
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '' });
    },

    handleTextChange: function(event) {
        if (event.target.value !== '\n' )
         this.setState({ text: event.target.value });
    },

    KeyPress: function(event) {
        if (event.charCode === 13 && this.state.text != '') {
            var newNote = {
                text: this.state.text,
                status: 0,
                id: Date.now()
            };

            this.props.onNoteAdd(newNote);
            this.setState({ text: '' });
        }
    },

    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows={5}
                    className="textarea"
                    value={this.state.text}
                    onKeyPress={this.KeyPress}
                    onChange={this.handleTextChange}
                />
                
            </div>
        );
    }
});

module.exports = NoteEditor;