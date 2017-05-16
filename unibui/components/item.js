/**
 * Created by dhwani on 5/2/17.
 */
import React,{Component,PropTypes} from 'react';
import ItemsActions from '../flux/actions/ItemsActions';
class Item extends Component{
    constructor(props){
        super(props)
    }
    render() {
        let items=<figure className="grid-item" onClick={ItemsActions.fetchItem.bind(
            null,
            this.props.itemId)}>
            <img src={this.props.image}/>
            <figcaption>{this.props.title}</figcaption>

        </figure>
return(
<div>{items}</div>

)
    }
}
Item.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    itemId:PropTypes.string
}

export default Item;
