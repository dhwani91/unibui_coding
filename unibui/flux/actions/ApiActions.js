import 'whatwg-fetch';

const API_URL = 'http://localhost:3000';
let ApiActions={
    fetchItemList() {
        var item=fetch(`${API_URL}/items`)
            .then((response) => response.json())
        console.log("item",item)
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
