import React,{Component} from 'react'
import 'whatwg-fetch';
import {Container} from 'flux/utils';
import ItemActions from '../flux/actions/ItemsActions';
import ItemListStore from '../flux/stores/ItemListStore';
import InfiniteScroll from 'redux-infinite-scroll';
import Grid from './grid.js';

const API_URL = 'http://localhost:3000';

class App extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            count:2
        }

    }
    static getStores() {
        return [ItemListStore];
    }
    static calculateState(prevState) {
        return {
                items:ItemListStore.getState()
            }

    }

    componentDidMount() {
        ItemActions.fetchItemList(1);
    }
    _loadMore() {
        this.setState({count: this.state.count + 1});
        var page=this.state.count;
       ItemActions.fetchItemList(page);

    }

render(){
    return(



        <div className="main">
            <Grid items={this.state.items} refs="grid" onScroll={this._loadMore.bind(this)} />
            <button type="button" className="btn btn-link pull-right loadMore" onClick={this._loadMore.bind(this)}>Load More</button>
       </div>
    )
}
}
export default Container.create(App);
