import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import AllItems from "./components/all_items.js";
import CartItems from "./components/cart_items.js";
import ItemDetail from "./components/item_detail.js";


export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
            <Route path="/" component={AppRoot} />
            <Route path="/all_items" component={AllItems} />
            <Route path="/cart_items" component={CartItems} />
            <Route path="/item/:id" component={ItemDetail} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
