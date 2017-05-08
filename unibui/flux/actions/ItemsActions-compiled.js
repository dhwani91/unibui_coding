'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = require('../AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _ApiActions = require('./ApiActions.js');

var _ApiActions2 = _interopRequireDefault(_ApiActions);

var _Constants = require('../Constants');

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemActionCreator = {
    fetchItemList: function fetchItemList() {
        _AppDispatcher2.default.dispatchAsync(_ApiActions2.default.fetchItemList(), {
            request: _Constants2.default.FETCH_ITEMLIST,
            success: _Constants2.default.FETCH_ITEMLIST_SUCCESS,
            failure: _Constants2.default.FETCH_ITEMLIST_FAILURE
        });
    },
    fetchItem: function fetchItem(itemId) {
        var id = itemId;
        _AppDispatcher2.default.dispatchAsync(_ApiActions2.default.fetchItem(id), {
            request: _Constants2.default.FETCH_ITEM,
            success: _Constants2.default.FETCH_ITEM_SUCCESS,
            failure: _Constants2.default.FETCH_ITEM_FAILURE
        }, { itemId: itemId });
    }
};
exports.default = ItemActionCreator;

//# sourceMappingURL=ItemsActions-compiled.js.map