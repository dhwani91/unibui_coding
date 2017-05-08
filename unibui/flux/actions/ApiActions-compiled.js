'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

require('whatwg-fetch');

var API_URL = 'http://localhost:3000';
var ApiActions = {
    fetchItemList: function fetchItemList() {
        var item = fetch(API_URL + '/items').then(function (response) {
            return response.json();
        });
        console.log("item", item);
        return item;
    },
    fetchItem: function fetchItem(itemId) {
        var responseData = fetch(API_URL + '/items/' + itemId).then(function (response) {
            return response.json();
        });
        return responseData;
    }
};
exports.default = ApiActions;

//# sourceMappingURL=ApiActions-compiled.js.map