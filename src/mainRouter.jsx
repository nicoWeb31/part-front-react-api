import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './core/Home';
import Signup from './users/Signup';


class mainRouter extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route exact path='/signup' component={Signup}></Route>
                </Switch>
            </div>
        );
    }
}

export default mainRouter;