'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('flux/utils');

var _ItemDetailStore = require('../flux/stores/ItemDetailStore');

var _ItemDetailStore2 = _interopRequireDefault(_ItemDetailStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dhwani on 5/2/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// import Details from './Desc.js'


var ItemDesc = function (_Component) {
    _inherits(ItemDesc, _Component);

    function ItemDesc(props) {
        _classCallCheck(this, ItemDesc);

        return _possibleConstructorReturn(this, (ItemDesc.__proto__ || Object.getPrototypeOf(ItemDesc)).call(this, props));
    }

    _createClass(ItemDesc, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log(this.state);
        }
    }, {
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate() {
            if (this.state !== null && this.state !== 'undefined') {
                return false;
            } else {
                return true;
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var item = this.state.itemDetail;

            if (item !== null) {}
        }
    }], [{
        key: 'getStores',
        value: function getStores() {
            return [_ItemDetailStore2.default];
        }
    }, {
        key: 'calculateState',
        value: function calculateState(prevState) {
            return {
                itemDetail: _ItemDetailStore2.default.getState()
            };
        }
    }]);

    return ItemDesc;
}(_react.Component);

exports.default = _utils.Container.create(ItemDesc);

//# sourceMappingURL=ItemDesc-compiled.js.map