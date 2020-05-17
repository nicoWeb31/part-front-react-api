import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Signin,autheticate} from '../auth'


class singnin extends Component {
    constructor(props) {
        super(props);
        this.state = {

            email:"",
            password:"",
            error:"",
            redirectTorefer : false,
            loading:false

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
        this.setState({loading:true})

        const {email,password} =this.state;
        const user = {

            // email:email,
            // password : password

            email,
            password
        };
        console.log(user);
        //singup 
        Signin(user).then(data =>{
            if(data.error) {
                this.setState({error : data.error,loading:false})
            }else{

                //authenticate user in local storage
                autheticate(data,()=>{
                    this.setState({redirectTorefer:true})
                });
                //redirect 

            }
        })
    }



    render(){

        //redirect 
        if(this.state.redirectTorefer){
            return <Redirect to="/" />
        }


        return (

            <div className="container">
            <h2 className="mt-5 mb-5">signin</h2>
        
    <div className="alert alert-danger" style = {{display : this.state.error ? "" : "none" }}>{this.state.error}</div>


    {/* laoding */}

    {this.state.loading &&  <div className='jumbotron text-center'><h2>Loading......</h2></div>}



            <form action="">


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

export default singnin;