"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var numberArray = [1, 2, 3];
var stringArray = ["a", "b", "c"];
var pair = {
    first: "noona",
    second: 2,
    display: function () {
        console.log(this.first + "는" + this.second + "살 입니다.");
    },
};
//문제 1
function getFirstElement(array) {
    return array[0];
}
console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
// function isNumberArray<T>(array: T[]): boolean {
//   if (array.every((item) => typeof item === "number")) {
//     return true;
//   }
//   return false;
// }
//문제 2
function isNumberArray(array) {
    return array.every(function (item) { return typeof item === "number"; });
}
console.log(isNumberArray([1, 2, 3]));
console.log(isNumberArray(["a", "b", "c"]));
console.log(isNumberArray([]));
var ex = {
    id: [1, 0],
    name: ["Alice", "Merry"],
    isActive: [true, false],
};
console.log(ex);
//문제 5
function pluck(array, key) {
    return array.map(function (item) { return item[key]; });
}
var users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];
console.log(pluck(users, "id"));
console.log(pluck(users, "name"));
