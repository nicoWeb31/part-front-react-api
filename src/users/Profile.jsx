import React, { Component } from 'react';
import { isAuthenticate } from '../auth';
import { Redirect } from 'react-router-dom';
import { read } from './apiUser';
import {Link} from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : "",
            redirectToSingnin: false
        };
    }



    



    init = (userId) =>{

        const token = isAuthenticate().token
        read(userId,token)


        .then(data =>{
            console.log(data)
            if(data.error){
                //console.log("error")
                this.setState({
                    redirectToSingnin:true
                })

                
            }else{
                

                this.setState({
                    user:data
                })

            }
        })

    }



    componentDidMount(){
        //console.log("user id from route param :", this.props.match.params.userId )
        const userId = this.props.match.params.userId;
        this.init(userId);

    }
    render() {

        const redircToSignIn = this.state.redirectToSingnin;
        if (redircToSignIn) return <Redirect to="/signin" />

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h2 className="mt-5 mb-5">Profile</h2>
                        <p>Hello {isAuthenticate().user.name}</p>
                        <p>Email {isAuthenticate().user.email}</p>
                        <p>{`Joined ${new Date(this.state.user.created).toDateString()}`}</p>

                    </div>
                    <div className="col-md-6">
                        {isAuthenticate().user && isAuthenticate().user._id === this.state.user._id && (
                            <div className = "d-inline-block mt-5 ">
                                <Link className ="btn btn-raise btn-success mr-auto" to={`/user/edit/${this.state.user._id}`}> Edit Profile</Link>
                                {/* <Link className ="btn btn-raise btn-danger mr-auto" to={`/user/edit/${this.state.user._id}`}> Edit Profile</Link> */}
                                <button className=" btn btn-raise btn-danger mr-auto"> Delete</button>



                            </div>
                        )}
                    </div>

                </div>

            </div>
        
        );
    }
}

export default Profile;