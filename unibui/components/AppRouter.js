import React,{Component} from 'react';
import {Router, Route, hashHistory,browserHistory} from 'react-router';
import App from './App.js'
import Itemdesc from './itemDesc.js'
class AppRouter extends Component{

    render() {
        return (

            <Router history={browserHistory}>
                <Route path='/' component={App}/>
                <Route path='/items/:id' component={Itemdesc}/>
            </Router>
        );
    }
}
export default AppRouter;
