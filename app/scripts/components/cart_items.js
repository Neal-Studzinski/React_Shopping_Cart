import React from "react";
import { connect } from "react-redux";
import Item from "./item.js";
import removeItem from "../actions/remove_item.js";
import saveCart from "../actions/save_cart.js";
import loadItems from "../actions/load_items.js";
//The cart component should be a 'container' component, which means it should:
//Connect to the Redux store.
//be responsible for dispatching the action to fetching data from the server
//pass all necessary data down to its children (The CartItems)

    const CartItems = ({ cartItems, total, history, dispatch, match }) => {
        const onClick = id =>
        () => {
            history.push("/item/" + id);
        };

        const onRemove = item =>
        () => {
            dispatch(removeItem(item));
        };

        const save = () => {
            saveCart(cartItems);
        };

        const load = () => {
            dispatch(loadItems());
        };

    return (
            <div>
                <div>Total: {total}</div>
                <button onClick={load}>Load Items</button>
                <button onClick={save}>Save Cart</button>
                <ul className="item-ul">
                    {cartItems.map((item, index) => {
                        return (
                            <Item
                            key={index}
                            item={item}
                            onClick={onClick(item.id)}
                            onRemove={onRemove(item)}
                            url={match}
                            />
                        );
                    })}
                </ul>
            </div>
            );
};

export default connect(state => state)(CartItems);
