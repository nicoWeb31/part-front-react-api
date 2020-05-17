import React from 'react'

import {Link,withRouter} from 'react-router-dom';


const isActive = (history,path)=>{
    if(history.location.pathname === path){
        return {color : "#ff9900"}
    }else{
        return {color :"#ffffff"}
    }
}



// =============================================================================
// singout
// =============================================================================

export const signout =(next)=>{
    if(typeof window !== undefined) localStorage.removeItem("jwt");
    next()
    return fetch("http://localhost:8080/singout",{
        method : "get"
    })
    .then(response=>{
        console.log('signout',response)
        return response.json()
    })
    .catch(err=> console.log(err))
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
        <li className="nav-item mx-5">
        <a className="nav-link"  onClick={()=>signout(()=>history.push('/'))} style={isActive(history,"/signup"),{cursor : "pointer",color:"#fff"}}>Sign out</a>
        </li>

    </ul>

    </div>


        );
}

export default withRouter(Menu);