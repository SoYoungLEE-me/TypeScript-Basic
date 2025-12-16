"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var b = {
    name: "이소영",
    isStudent: true,
};
var c = {
    name: "이나영",
    isStudent: false,
};
var american = {
    nationality: "american",
    period: new Date(""),
};
var user1 = {
    id: 1,
    name: "Alice",
};
var userWithEmail = {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
};
var user = {
    id: 1,
    name: "Alice",
    address: {
        city: "Seoul",
        zipCode: 12345,
    },
};
console.log(user);
var normalUser = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
var adminUser = {
    id: 2,
    name: "Bob",
    role: "Administrator",
};
var normalProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};
var discountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};
console.log("".concat(discountedProduct.name, "\uC740 ").concat(discountedProduct.discount, "% \uD560\uC778\uD574 ").concat(discountedProduct.price -
    (discountedProduct.price * discountedProduct.discount) / 100, "\uC5D0 \uD310\uB9E4\uB429\uB2C8\uB2E4."));
