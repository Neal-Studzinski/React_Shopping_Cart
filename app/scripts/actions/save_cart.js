export default function saveCart(cartItems) {
    console.log("SAVED TO BACKENDLESS");
    cartItems.forEach(item => {
        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "https://api.backendless.com/v1/data/cart",
            headers: {
                "application-id": "5CE66581-9F04-9B6B-FFB0-6A1B49A22100",
                "secret-key": "8490FDF7-826D-AA27-FF2A-777E48C2DD00"
            },
            data: JSON.stringify({
                item: item.item,
                price: item.price,
                id: item.id
            })
        });
    });
}
