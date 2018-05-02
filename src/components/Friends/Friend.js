import React, { Component } from 'react'
import PropTypes from 'prop-types'
var Contact = React.createClass({
            render: function() {
                return (
                    <li className="contact">
                        <img className="contact-image" src={this.props.image} width="60px" height="60px" />
                        <div className="contact-info">
                            <div className="contact-name"> {this.props.name} </div>
                        </div>
                    </li>
                );
            }
        });

var FriendsList = React.createClass({
    getInitialState: function() {
        return {
            displayedFriends: this.props.friends,
            fullFriends : this.props.friends
        };
    },

    handleSearch: function(event) {
        var searchQuery = event.target.value.toLowerCase();
        var displayedFriends = this.state.fullFriends.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedFriends: displayedFriends
        });
    },

    render: function() {

            	console.log(this.props);
        return (
            <div className="friends">
                <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
                <ul className="friends-list">
                    {
                       this.state.displayedFriends.map(function(el) {
                            return <Contact
                                key={el.id}
                                name={el.name}
                                image={el.img}
                            />;
                       })
                    }
                </ul>
            </div>
        );
    }
});

export default FriendsList;