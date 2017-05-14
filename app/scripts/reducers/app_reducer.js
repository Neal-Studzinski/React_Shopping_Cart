export default function AppReducer(state, action) {
    if (state === undefined) {
        return {
            items: [
                { id: 1, item: "40in TV", price: 399.99 },
                { id: 2, item: "Baseball Hat", price: 19.99 },
                { id: 3, item: "12 pack Bud Light", price: 15.99 },
                { id: 4, item: "Vanilla Extract", price: 4.99 },
                { id: 5, item: "Brautworst", price: 6.99 }
            ],
            cartItems: [],
            total: 0
        };
    }
    switch (action.type) {
        case "LOAD_ITEMS":
            let newTotal = 0;
            let items = action.items.map(item => {
            newTotal += item.item.price;
            return item.item;
            });
            return Object.assign({}, state, {
                cartItems: items,
                total: newTotal
            });
        case "ADD_ITEM":



  }

  console.log("Unhandled State!");
  return state;
}
