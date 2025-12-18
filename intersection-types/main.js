"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var filter = {
    rate: 2.3,
    review: 3,
};
var calculateDiscountedPrice = function (item) {
    var result = item.price - item.price * (item.discountPercentage / 100);
    return result;
};
var discountedProduct = {
    id: 101,
    name: "Laptop",
    price: 1000,
    discountPercentage: 20,
};
console.log(calculateDiscountedPrice(discountedProduct));
var printOrderSummary = function (order) {
    var result = "order : ".concat(order.orderId, " (Phone : ").concat(order.phone, ")");
    return result;
};
var orderDetails = {
    phone: "123-456-7890",
    address: "123 Main St",
    orderId: 2023,
    items: ["Laptop", "Mouse"],
};
console.log(printOrderSummary(orderDetails));
var mergeUserData = function (profile, activity) {
    return __assign(__assign({}, profile), activity);
};
var getUserSummary = function (user) {
    var result = "\uC0AC\uC6A9\uC790 ".concat(user.id, " - ").concat(user.name, " (").concat(user.email, " - \uB9C8\uC9C0\uB9C9 \uB85C\uADF8\uC778 : ").concat(user.lastLogin, ")");
    return result;
};
var profile = { id: 1, name: "Alice", email: "alice@example.com" };
var activity = {
    lastLogin: new Date("2024-01-01T10:00:00Z"),
    actions: ["login", "viewed dashboard", "logout"],
};
var mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
