import React, { Component } from 'react';
import {list} from './apiUser';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:''
        };
    }


    componentDidMount(){
        list().then(data =>{

            if(data.err){
            console.log(data.err)
            } else {
                console.log(data)

                this.setState({
                    users:data
                })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Users List</h2>
                
            </div>

        );
    }
}

export default Users;