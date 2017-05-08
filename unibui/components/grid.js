import React,{Component} from 'react';
import {Link} from 'react-router'
import Item from './item.js';
import ItemActionCreator from '../flux/actions/ItemsActions';


class Grid extends Component{
constructor(props){
    super(props)
}
    render() {
        let childElements = this.props.items.map((item)=> {
            var imageUrl=item.LargeImage[0].URL[0];
            var title=item.ItemAttributes[0].Title;
            var itemId=item.ASIN[0];
            return (
                <Link to={'/items/'+itemId}>
                <Item caption={title} image={imageUrl}  itemId={itemId}  />
                </Link>

            );
        });
        return (

            <div id="columns">
                {childElements}

            </div>
        );
    }
}
export default Grid;