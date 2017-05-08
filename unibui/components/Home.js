
import React from 'react';
import App from './App.js'
import ItemDesc from './ItemDesc.js'
class Home extends React.Component {
    render() {
        return (
            <div className="home">{this.props.children}
                </div>

        );
    }
}
export default Home;