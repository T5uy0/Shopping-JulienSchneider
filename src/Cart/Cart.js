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

    //endregion public methods

    //region private methods
    //endregion private methods
}