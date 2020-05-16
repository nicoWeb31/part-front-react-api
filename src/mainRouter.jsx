import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './core/Home';
import Menu from './core/Menu';

import Signup from './users/Signup';
import Signin from './users/singnin';



class mainRouter extends Component {

    render() {
        return (
            <div>
                <Menu/>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/signup' component={Signup}></Route>
                    <Route exact path='/signin' component={Signin}></Route>

                </Switch>
            </div>
        );
    }
}

export default mainRouter;