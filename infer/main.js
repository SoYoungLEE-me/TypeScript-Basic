"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var result = {
    title: "hey",
    releaseDate: "2203",
};
function getUserInfo() {
    return { name: "Alice", age: 21 };
}
//2. as
//타입 추론이 잘 안 됐을 때 as를 통해서 강제로 타입 추론을 시켜줌
var someValue = "Hello world";
var newValue = someValue;
console.log(newValue.length);
//문제 2
function getValue(obj, key) {
    key;
    return obj[key];
}
var user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
console.log(getValue(user, "name"));
console.log(getValue(user, "email"));
function processRequest(type, data) {
    return "Processed: ".concat(data);
}
console.log(processRequest("text", "Hello"));
console.log(processRequest("json", { key: "value" }));
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111])));
