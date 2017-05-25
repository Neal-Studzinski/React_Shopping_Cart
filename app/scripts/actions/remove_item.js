export default function removeItem(item) {
    return function(dispatch) {
        dispatch({ type: "REMOVE_ITEM", item: item });
    };
    $.ajax({
        type: "DELETE",
        url: "https://api.backendless.com/v1/data/cart/" + item.id,
        headers: {
            "application-id": "5CE66581-9F04-9B6B-FFB0-6A1B49A22100",
            "secret-key": "8490FDF7-826D-AA27-FF2A-777E48C2DD00"
        }
    });
}
