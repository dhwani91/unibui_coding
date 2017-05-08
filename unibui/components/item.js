/**
 * Created by dhwani on 5/2/17.
 */
import React,{Component} from 'react';
import ItemsActions from '../flux/actions/ItemsActions';
import ItemListStore from '../flux/stores/ItemListStore';
class Item extends Component{
    constructor(props){
        super(props)
    }
    render() {
        let items=<figure  className="grid-item" onClick={ItemsActions.fetchItem.bind(
            null,
            this.props.itemId)} >
            <img src={this.props.image}/>
            <figcaption>{this.props.caption}</figcaption>

        </figure>
return(
<div>{items}</div>

)
    }
}
Item.propTypes = {
    image: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string.isRequired
}

export default Item;
