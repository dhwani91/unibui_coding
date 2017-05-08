'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = require('flux/utils');

var _reactAddonsUpdate = require('react-addons-update');

var _reactAddonsUpdate2 = _interopRequireDefault(_reactAddonsUpdate);

var _AppDispatcher = require('../AppDispatcher');

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _Constants = require('../Constants');

var _Constants2 = _interopRequireDefault(_Constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dhwani on 5/6/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ItemDetailStore = function (_ReduceStore) {
    _inherits(ItemDetailStore, _ReduceStore);

    function ItemDetailStore() {
        _classCallCheck(this, ItemDetailStore);

        return _possibleConstructorReturn(this, (ItemDetailStore.__proto__ || Object.getPrototypeOf(ItemDetailStore)).apply(this, arguments));
    }

    _createClass(ItemDetailStore, [{
        key: 'getInitialState',
        value: function getInitialState() {
            return [];
        }
    }, {
        key: 'reduce',
        value: function reduce(state, action) {
            switch (action.type) {
                case _Constants2.default.FETCH_ITEM_SUCCESS:
                    return action.payload.response;
                default:
                    return state;
            }
        }
    }]);

    return ItemDetailStore;
}(_utils.ReduceStore);

exports.default = new ItemDetailStore(_AppDispatcher2.default);

//# sourceMappingURL=ItemDetailStore-compiled.js.map