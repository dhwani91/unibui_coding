import 'whatwg-fetch';
const API_URL = 'http://localhost:3000';
let ApiActions={
    fetchItemList(page,category) {
        var item=fetch(`${API_URL}/items?page=${page}&category=${category}`)
            .then((response) => response.json())
        return (
            item
        )
    },

    fetchItem(itemId){
        var responseData=fetch(`${API_URL}/items/${itemId}`)
            .then((response) => response.json());
        return(
            responseData

        )

    }

}

export default ApiActions;
