import React, { Component } from 'react';
import { list } from './apiUser';
import User from './User'



class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users:[]
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

        const {users} = this.state

        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Users List</h2>
                <div className="card">
                    {this.state.users && users.map((user,id)=>
                        
                        <User data={user} key={id} />

                    

                    )}
                </div>
            </div>

        );
    }
}

                        
                    



export default Users;