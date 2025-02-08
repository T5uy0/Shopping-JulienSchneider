"use strict";

const InvalidArticleIdException = require("./InvalidArticleIdException.js");
const InvalidQuantityException = require("./InvalidQuantityException.js");
const InvalidPriceException = require("./InvalidPriceException.js");

module.exports = class CartItem {

    //region private attributes
    articleId;
    name;
    quantity;
    price;
    //endregion private attributes

    //region public methods
    constructor(articleId, name, quantity, price) {
        //Invalid quantity (smaller than 1)
        if (quantity < 1) {
            throw new InvalidQuantityException();
        }
        //Invalid price (smaller than 10)
        if (price < 10) {
            throw new InvalidPriceException();
        }
        //Invalid article id (smaller than 1)
        if (articleId < 1) {
            throw new InvalidArticleIdException();
        }

        this.articleId = articleId;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get articleId() {
        throw new Error();
    }

    get name() {
        throw new Error();
    }

    get quantity() {
        throw new Error();
    }

    set quantity(value) {
        throw new Error();
    }

    get price() {
        throw new Error();
    }

    set price(price) {
        throw new Error();
    }

    get total() {
        throw new Error();
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}



