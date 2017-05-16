import React,{Component} from 'react'
import 'whatwg-fetch';
import {Container} from 'flux/utils';
import ItemActions from '../flux/actions/ItemsActions';
import ItemListStore from '../flux/stores/ItemListStore';
import InfiniteScroll from 'redux-infinite-scroll';
import Grid from './grid.js';
import FindForm from './FindForm.js';

const API_URL = 'http://localhost:3000';

class App extends Component{
    constructor(props, context) {
        super(props, context);
        this.state={
            count:2,
            category:'Novel'
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
    componentWillReceiveProps(nextProp,nextState){

    }
    componentDidMount() {
        let defaultCategory='Novel';
         ItemActions.fetchItemList(1,defaultCategory);
    }
    _loadMore() {
        var page=this.state.count;
        this.setState({count:this.state.count+1});
        ItemActions.fetchItemList(this.state.count,this.state.category);

    }

    handleState(categoryName) {
        var page=this.state.count;
        if(categoryName!=this.state.category) {
            this.setState({items:''})
            var array = this.state.items;
            array.splice(0, page);
            this.setState({items: array });
            this.setState({category: categoryName});
            ItemActions.fetchItemList(1, categoryName);
        }

        else{
            this.setState({count:page+1})
            ItemActions.fetchItemList(page+1,this.state.category);

        }

    }


render(){
    return(
        <div className="main">
            <FindForm callBack={this.handleState.bind(this)}/>
            <Grid items={this.state.items} refs="grid" onScroll={this._loadMore.bind(this)} />
            <button type="button" className="btn btn-link pull-right loadMore" onClick={this._loadMore.bind(this)}>Load More</button>
       </div>
    )
}
}
export default Container.create(App);
