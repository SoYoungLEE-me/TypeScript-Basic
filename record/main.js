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
// type StringNumberMap= {
//     [key: string]: number;
//   }; 과 동일
var example = {
    apple: 1,
    orange: 2,
    mango: 9,
};
var inventoryResponse = {
    apple: { id: "1", name: "apple", price: 2000 },
};
var shippingCosts = {
    US: 10,
    EU: 15,
    ASIA: 20,
    AFRICA: 25,
};
function calculateShippingCost(region, costs) {
    return costs[region];
}
console.log(calculateShippingCost("US", shippingCosts));
console.log(calculateShippingCost("EU", shippingCosts));
console.log(calculateShippingCost("ASIA", shippingCosts));
console.log(calculateShippingCost("AFRICA", shippingCosts));
var scores = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
};
function calculateAverageScore(scores) {
    var keys = Object.keys(scores);
    var sum = keys.reduce(function (acc, key) { return acc + scores[key]; }, 0);
    return sum / keys.length;
}
console.log(calculateAverageScore(scores));
var prices = {
    Laptop: 1000,
    Phone: 500,
    Tablet: 300,
};
function updateProductPrice(prices, product, newPrice) {
    var _a;
    if (!(product in prices)) {
        throw new Error("존재하지 않는 상품입니다.");
    }
    return __assign(__assign({}, prices), (_a = {}, _a[product] = newPrice, _a));
}
console.log(updateProductPrice(prices, "Phone", 550));
