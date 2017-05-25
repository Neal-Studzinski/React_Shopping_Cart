export default function loadItems() {
    return function(dispatch) {
        return $.ajax({
            type: "GET",
            url: "https://api.backendless.com/v1/data/items",
            dataType: "json",
            headers: {
                "application-id": "5CE66581-9F04-9B6B-FFB0-6A1B49A22100",
                "secret-key": "8490FDF7-826D-AA27-FF2A-777E48C2DD00"
            }
        }).then(response => {
            console.log(response);
            dispatch({ type: "LOAD_ITEMS", items: response.data });
        });
    };
}
