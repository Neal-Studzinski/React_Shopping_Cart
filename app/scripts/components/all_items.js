import React from "react";
import { connect } from "react-redux";
import Item from "./item.js";
import addItem from "../actions/add_item.js";
import loadItems from "../actions/load_items.js";

const AllItems = ({ items, total, history, dispatch, match }) => {
    //dispatch(loadItems());
    const onClick = id => () => {
        history.push("/item/" + id);
    };

    const onAdd = item => () => {
        dispatch(addItem(item));
    };

    const load = () => {
        dispatch(loadItems());
    };

    return (
        <div>
            <div>
                <button className="load" onClick={load}>Load Items</button>
            </div>
            <div className="total">Total: ${total}</div>
            <ul className="display">

                {items.map((item, index) => {
                    return (
                        <div key={item.id}>
                            <Item
                                item={item}
                                onClick={onClick(item.id)}
                                onAdd={onAdd(item)}
                                url={match}
                            />

                        </div>
                    );
                })}
            </ul>
        </div>
    );
};

export default connect(state => state)(AllItems);
