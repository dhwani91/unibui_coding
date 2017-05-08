
import React,{Component} from 'react'
import {Container} from 'flux/utils';
// import ItemAction from '../flux/actions/ItemActions';
import ItemDetailStore from '../flux/stores/ItemDetailStore';

import Details from './Desc.js'


class ItemDesc extends Component{
    constructor(props){
    super(props)
    }

    static getStores() {
        return [ItemDetailStore];
    }

    static calculateState(prevState) {
        return {
            itemDetail: ItemDetailStore.getState()
        }
    }
    shouldComponentUpdate(){
        if(this.state!== null && this.state!=='undefined'){
            return false;
        }
        else{
            return true;
        }
    }
    render(){
        let item=this.state.itemDetail.length;

    if(item !==0){
    return (
        <div className="main">
            <Details desc={this.state.itemDetail}/>
        </div>
    )
}
else{
    return null
}
        }
}
export default Container.create(ItemDesc);