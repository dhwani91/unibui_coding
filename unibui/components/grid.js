import React,{Component,PropTypes} from 'react';
import {Link} from 'react-router'
import Item from './item.js';
import ItemsActions from '../flux/actions/ItemsActions';


class Grid extends Component{
constructor(props){
    super(props)
}
    render() {
        let childElements = this.props.items.map((item)=> {
        let imageUrl,title,itemId
           let child= item.map((i)=>{
                imageUrl=i.LargeImage[0].URL[0];
                 title=i.ItemAttributes[0].Title[0];
                 itemId=i.ASIN[0];
                return(<Item title={title} image={imageUrl} itemId={itemId} />)

            });
            return(  <Link to={'/items/'+itemId}><div>{child}</div></Link>)
        });
        return (

            <div id="columns">

                {childElements}

            </div>
        );
    }
}
export default Grid;

Grid.PropTypes={
    items:PropTypes.arrayOf(PropTypes.object)
}