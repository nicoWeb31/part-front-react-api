import React, { Component } from 'react';
import {signup} from '../auth'



class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            email:"",
            password:"",
            error:"",
            open:false
        };
    }


    // =========================================================================
    // handle change
    // =========================================================================

    handleChange = (e) =>{
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.setState({
            [fieldName] : fieldValue
        })
        this.setState({error:""});
    }

    //ou 
    // handleChange = (name) => event =>{
    //     this.setState({[name] : event.target.value})
    // }


    // =========================================================================
    // clickSubmit
    // =========================================================================

    clickSubmit = (e) => {
        e.preventDefault();

        const {name,email,password} =this.state;
        const user = {
            // name : name,
            // email:email,
            // password : password
            name,
            email,
            password
        };
        //console.log(user);
        //singup 
        signup(user).then(data =>{
            if(data.error) {
                this.setState({error : data.error})
            }else{
                this.setState({

                    error : "",
                    name :"",
                    password:"",
                    email:"",
                    open:true

                })
            }
        })
    }


    render() {



        return (
            <div className="container">
                <h2 className="mt-5 mb-5">signup</h2>
            
        <div className="alert alert-danger" style = {{display : this.state.error ? "" : "none" }}>{this.state.error}</div>
        <div className="alert alert-info" style = {{display : this.state.open ? "" : "none" }}>account create with success</div>


                <form action="">
                    <div className="form-group">
                        <label htmlFor="" className="text-muted">Name : </label>
                        <input onChange={this.handleChange} name="name" type="text" className="form-control" value = {this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="text-muted">Email : </label>
                        <input onChange={this.handleChange} name="email" type="text" className="form-control" value = {this.state.email}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="" className="text-muted">Password : </label>
                        <input onChange={this.handleChange} name="password" type="password" className="form-control" value = {this.state.password}/>
                    </div>

                    <button onClick={this.clickSubmit} className='btn btn-raised btn-primary'>Submit</button>

                </form>


            </div>
        );
    }
}

export default Signup;