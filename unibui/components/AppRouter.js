import React,{Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';
import App from './App.js'
import Itemdesc from './itemDesc.js'
import Home from './Home.js'


class AppRouter extends Component{

    render() {
        return (

            <Router history={hashHistory}>
                <Route component={Home} />
                    <Route path='/' component={App}/>
                    <Route path='/items/:id' component={Itemdesc}/>
                </Router>

        );
    }
}
export default AppRouter;
