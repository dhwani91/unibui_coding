import React,{Component,PropTypes} from 'react';
import ItemsActions from '../flux/actions/ItemsActions';

class FindForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: ''
        }
    }

    render() {
        return (
            <div className="container">
            <div className="search-form">
                <h1 className="text-center">Search for a Books</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <input type="text" className="form-control" ref="title" placeholder="Enter a Book category..."/>
                    </div>
                    <button className="btn btn-primary btn-block">Search Books</button>
                </form>
            </div>
                </div>
        );
    }

    onSubmit(e){
        e.preventDefault();
        const product = {
            title: this.refs.title.value.trim()
        };
        console.log("title",product.title)
        if(product.title!=null && product.title!='0' && product.title!='' ){
            this.props.callBack(product.title);
        }

        //ItemsActions.fetchItemList(1,product.title);
    };
}

export default FindForm;
FindForm.PropTypes={
    callBack:PropTypes.function
}