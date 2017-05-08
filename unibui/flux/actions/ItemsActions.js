import AppDispatcher from '../AppDispatcher';
import ApiActions from './ApiActions.js';
import constants from '../Constants';

let ItemActionCreator = {
    fetchItemList() {
        AppDispatcher.dispatchAsync(ApiActions.fetchItemList(), {
            request: constants.FETCH_ITEMLIST,
            success: constants.FETCH_ITEMLIST_SUCCESS,
            failure: constants.FETCH_ITEMLIST_FAILURE
        });
    },

    fetchItem(itemId) {
        var id=itemId;
        AppDispatcher.dispatchAsync(ApiActions.fetchItem(id), {
            request: constants.FETCH_ITEM,
            success: constants.FETCH_ITEM_SUCCESS,
            failure: constants.FETCH_ITEM_FAILURE
        }, {itemId})

    }
}
export default ItemActionCreator;