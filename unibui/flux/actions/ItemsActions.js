import AppDispatcher from '../AppDispatcher';
import ApiActions from './ApiActions.js';
import constants from '../Constants';

let ItemActionCreator = {
    fetchItemList(pageNo,category) {
        var page=pageNo;
        AppDispatcher.dispatchAsync(ApiActions.fetchItemList(page,category), {
            request: constants.FETCH_ITEMLIST,
            success: constants.FETCH_ITEMLIST_SUCCESS,
            failure: constants.FETCH_ITEMLIST_FAILURE
        },{page,category});
    },

    fetchItem(itemId) {
        var id=itemId;
        AppDispatcher.dispatchAsync(ApiActions.fetchItem(id), {
            request: constants.FETCH_ITEM,
            success: constants.FETCH_ITEM_SUCCESS,
            failure: constants.FETCH_ITEM_FAILURE
        }, {itemId})

    },

    removePrev(category){
        AppDispatcher.dispatchAsync()

}
}
export default ItemActionCreator;