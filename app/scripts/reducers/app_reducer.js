//The reducer should:
//have (at a minimum) an items array and a total in the state
//handle a custom action through which one could add a new item to it
//handle a custom action through which one could remove an item from it
//have a custom function that calculates the total based on the items currently in the cart
import utils from "../utils.js";
import React from "react";

export default function AppReducer(currentState, action) {
    const newState = utils.newState(currentState);

    if (currentState === undefined) {
        return {
            // items: [
            //     { id: 1, item: "40in TV", price: 399.99 },
            //     { id: 2, item: "Baseball Hat", price: 19.99 },
            //     { id: 3, item: "12 pack Bud Light", price: 15.99 },
            //     { id: 4, item: "Vanilla Extract", price: 4.99 },
            //     { id: 5, item: "Brautworst", price: 6.99 }
            // ],
            items: [],
            cartItems: [],
            total: 0
        };
    }
    switch (action.type) {
        case "LOAD_ITEMS":
            let items = action.items.map(item => {
                //newTotal += item.price;
                return item;
            });
            return newState({
                items: items
            });

        case "ADD_ITEM":
            var total = parseFloat(currentState.total);
            var newTotal = (total + action.item.price).toFixed(2);
            var myItems = currentState.cartItems.slice();

            myItems.push(action.item);

            return newState({
                cartItems: myItems,
                total: newTotal
            });

        case "REMOVE_ITEM":
            var total = parseFloat(currentState.total);
            var newTotal = (total - action.item.price).toFixed(2);
            var myItems = currentState.cartItems.slice();
            var deletedItem = myItems.indexOf(action.item);
            myItems.splice(deletedItem, 1);
            return newState({
                cartItems: myItems,
                total: newTotal
            });
    }
    return currentState;
}
