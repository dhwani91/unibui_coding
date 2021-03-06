/**
 * Created by dhwani on 5/6/17.
 */
import {ReduceStore} from 'flux/utils';
import update from 'react-addons-update';
import AppDispatcher from '../AppDispatcher';
import constants from '../Constants';
class ItemDetailStore extends  ReduceStore {
    getInitialState() {
        return [];
    }
    reduce(state, action) {
        switch(action.type) {
            case constants.FETCH_ITEM_SUCCESS:
                return action.payload.response;
            default:
                return state;
        }
    }
}
export default new ItemDetailStore(AppDispatcher);