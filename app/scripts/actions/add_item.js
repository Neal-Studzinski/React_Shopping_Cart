import ItemDetail from "../components/item_detail.js";
import React from "react";

export default function addItem(item) {
    return function(dispatch) {
        dispatch({ type: "ADD_ITEM", item: item });
        //dispatch({ ItemDetail });
    };
}
