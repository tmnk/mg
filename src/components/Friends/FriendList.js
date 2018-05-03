import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {List} from 'material-ui/List';
import FriendItem from './FriendItem'

export default class FriendList extends Component {
    state = {
        displayedFriends: this.props.friends,
        fullFriends : this.props.friends
    };

    handleSearch = (event) => {
        var searchQuery = event.target.value.toLowerCase();
        var displayedFriends = this.state.fullFriends.filter(function(el) {
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
        });

        this.setState({
            displayedFriends: displayedFriends
        });
    }

    render () {

        return (
            <div className="friends">
                <input type="text" placeholder="Search..." className="search-field" onChange={this.handleSearch} />
                <List>
                    {
                       this.state.displayedFriends.map(function(el) {
                            return <FriendItem
                                key={el.id}
                                name={el.name}
                                image={el.img}
                                onGoTo={() => this.props.onGoToFriend(el.id)}
                            />;
                       })
                    }
                </List>
            </div>
        );
    }
}