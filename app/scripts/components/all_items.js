import React from "react";
import { connect } from "react-redux";
import Item from "./item.js";
import addItem from "../actions/add_item.js";

const AllItems = ({ items, total, history, dispatch, match }) => {
    const onClick = id => () => {
        history.push("/item/" + id);
    };

    const onAdd = item => () => {
        dispatch(addItem(item));
    };

    return (
        <div>

            <div className="total">Total: {total}</div>
            <ul className="display">

                {items.map((item, index) => {
                    return (
                        <div>
                            <Item
                                key={index}
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
