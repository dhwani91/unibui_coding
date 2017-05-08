'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _flux = require('flux');

require('babel-polyfill');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by dhwani on 5/6/17.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var AppDispatcher = function (_Dispatcher) {
    _inherits(AppDispatcher, _Dispatcher);

    function AppDispatcher() {
        _classCallCheck(this, AppDispatcher);

        return _possibleConstructorReturn(this, (AppDispatcher.__proto__ || Object.getPrototypeOf(AppDispatcher)).apply(this, arguments));
    }

    _createClass(AppDispatcher, [{
        key: 'dispatchAsync',
        value: function dispatchAsync(promise, types, payload) {
            var _this2 = this;

            var request = types.request,
                success = types.success,
                failure = types.failure;

            promise.then(function (response) {
                return _this2.dispatch({
                    type: success,
                    payload: Object.assign({}, payload, { response: response })
                });
            }, function (error) {
                return _this2.dispatch({
                    type: failure,
                    payload: Object.assign({}, payload, { error: error })
                });
            });
            this.dispatch({
                type: request,
                payload: Object.assign({}, payload)
            });
        }
    }]);

    return AppDispatcher;
}(_flux.Dispatcher);

exports.default = new AppDispatcher();

//# sourceMappingURL=AppDispatcher-compiled.js.map