export default function saveCart(cartItems) {
    $.ajax({
        type: "GET",
        url: "http://tiny-za-server.herokuapp.com/collections/NealsCart/",
        dataType: "json"
        })
        .then(response => {
            response.forEach(item => {
                $.ajax({
                    type: "DELETE",
                    url: "http://tiny-za-server.herokuapp.com/collections/NealsCart/" +
                    item._id
                });
            });
        })
        .then(() => {
            cartItems.forEach(item => {
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: "http://tiny-za-server.herokuapp.com/collections/NealsCart",
                    data: JSON.stringify({
                        item: item
                    })
                });
            });
        });
}
