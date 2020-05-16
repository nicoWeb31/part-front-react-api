import React from 'react'

import {Link,withRouter} from 'react-router-dom';


const isActive = (history,path)=>{
    if(history.location.pathname === path){
        return {color : "#ff9900"}
    }else{
        return {color :"#ffffff"}
    }
}


const Menu =({history})=> {

        
        return (
            



  <div>
    <ul class="nav nav-tabs mr-auto bg-primary">
        <li  className="nav-item mx-5" >
            <Link className="nav-link" to="/" style={isActive(history,"/")}>Home</Link>
        </li>
        <li className="nav-item mx-5">
            <Link className="nav-link" to="/signup" style={isActive(history,"/signup")}>Signup</Link>
        </li>
        <li className="nav-item mx-5">
        <Link className="nav-link" to="signin" style={isActive(history,"/signin")}>Signin</Link>
        </li>
        {/* <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
        </li> */}
    </ul>

    </div>


        );
}

export default withRouter(Menu);