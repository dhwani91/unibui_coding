/**
 * Created by dhwani on 5/10/17.
 */
import React,{Component} from 'react'
class SearchForm extends Component{
    constructor(props){
        super(props)
    }
    case constants.DELETE_CARD:
    cardIndex = this.getCardIndex(action.payload.card._id);
    return update(state, {
    $splice: [[cardIndex, 1]]
});

    render(){
        return(
            <div className="search-form">
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Dropdown
                    <span className="caret"></span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a href="#"></a></li>
                    <li><a href="#">Appliences</a></li>
                    <li><a href="#">ArtsAndCrafts</a></li>
                    <li><a href="#">Baby</a></li>
                    <li><a href="#">Beauty</a></li>
                    <li><a href="#">Books</a></li>
                    <li><a href="#">Grocery</a></li>

                </ul>
            </div>
                </div>
        );
    }
}
export default SearchForm;