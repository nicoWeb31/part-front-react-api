import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>{this.props.data.name}</h1>
            </div>
        );
    }
}

export default User;