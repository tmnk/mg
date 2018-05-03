import React, { Component } from 'react'
import PropTypes from 'prop-types'
var ChatEditor = React.createClass({
    getInitialState: function() {
        return {
            text: ''
        };
    },

    handleChatAdd: function(ev) {
        var newChat = {
            text: this.state.text,
            status: 0,
            id: Date.now()
        };

        this.props.onChatAdd(newChat);
        this.setState({ text: '' });
    },

    handleTextChange: function(event) {
        if (event.target.value !== '\n' )
         this.setState({ text: event.target.value });
    },

    KeyPress: function(event) {
        debugger
        if (event.charCode === 13 && this.state.text != '') {
            var newChat = {
                text: this.state.text,
                status: 0,
                id: Date.now()
            };

            this.props.onMessageAdd(newMessage);
            this.setState({ text: '' });
        }
    },

    render: function() {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your message here..."
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

module.exports = ChatEditor;