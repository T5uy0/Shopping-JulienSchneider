/**
 * @file      Cart.js
 * @brief     Class of Cart.
 * @author    Created by Julien.Schneider
 * @version   12-02-2025
 */
"use strict";
const EmptyCartException = require("./EmptyCartException.js");
const UpdateCartException = require("./UpdateCartException.js");


module.exports = class Cart {

    //region private attributes
    #items

    //endregion private attributes

    //region public methods
    constructor(items = []) {
        this.#items = items;
    }

    get items() {
        if (!Array.isArray(this.#items)) {
            throw new EmptyCartException;
        }
        return this.#items;
    }

    get total() {
        // Calculates the total price of all items in the cart by iterating over the `items` array
        // and summing up the product of `price` and `quantity` for each `CartItem`.
        // The initial value of `total` is set to 0 to ensure proper accumulation.
        if (!Array.isArray(this.#items)) {
            throw new EmptyCartException;
        }
        return this.#items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    get count() {
        if (!Array.isArray(this.#items)) {
            throw new EmptyCartException;
        }
        return this.#items.length;
    }

    //endregion public methods

    //region private methods
    //endregion private methods
}