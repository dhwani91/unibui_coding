import React,{Component} from 'react'
import 'whatwg-fetch';
import ReactDOM from 'react-dom'
import {Container} from 'flux/utils';
import ItemActions from '../flux/actions/ItemsActions';
import ItemListStore from '../flux/stores/ItemListStore';
import InfiniteScroll from 'react-infinite-scroller';
import Grid from './grid.js';
const API_URL = 'http://localhost:3000';

class App extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            tracks: [],
            hasMoreItems: true,
            nextHref: null
        }

    }
    static getStores() {
        return [ItemListStore];
    }
    static calculateState(prevState) {
        return {
            items: ItemListStore.getState()
        }
    }
    componentDidMount() {
        ItemActions.fetchItemList();
    }
render(){
    return(
        <div className="main">

            <Grid items={this.state.items} refs="grid" />

       </div>
    )
}
}
export default Container.create(App);
