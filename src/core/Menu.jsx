import React from 'react';
import{isAuthenticate,signout,isActive} from '../auth'

import {Link,withRouter} from 'react-router-dom';



const Menu =({history})=> {

        
        return (
            



  <div>
    <ul className="nav nav-tabs mr-auto bg-primary">
        <li  className="nav-item mx-5" >
            <Link to={'/'} className="nav-link"  style={isActive(history,"/")}>Home</Link>
        </li>

        <li  className="nav-item mx-5" >
            <Link  to={'/users'} className="nav-link"  style={isActive(history,"/users")}>Users</Link>
        </li>

            {isAuthenticate() && 
            
            <>
                <li className="nav-item mx-5">
                    <Link className="nav-link"  onClick={()=>signout(()=>history.push('/'))} style={isActive(history,"/signup"),{cursor : "pointer",color:"#fff"}}>Sign out</Link>
                </li>
            
                <li className="nav-item mx-5">
                    <Link to={`/user/${isAuthenticate().user._id}`} className="nav-link" style={isActive(history,`/user/${isAuthenticate().user._id}`)}>
                        {`${isAuthenticate().user.name} - profile`} 
                    </Link>
                </li>

                
            </>
            }




            {!isAuthenticate() && (
                <>

                    <li className="nav-item mx-5">
                        <Link className="nav-link" to="/signup" style={isActive(history,"/signup")}>Signup</Link>
                    </li>
                    <li className="nav-item mx-5">
                        <Link className="nav-link" to="signin" style={isActive(history,"/signin")}>Signin</Link>
                    </li>

                </>

            )}


    </ul>

    </div>


        );
}

export default withRouter(Menu);