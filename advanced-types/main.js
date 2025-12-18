"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//any
var a = "이소영";
a = 3;
a = true;
//웬만하면 안쓰는게 좋음. 타입이 결정이 안된 거면 unknown 처리 하는게 나음
//왜냐 오류가 안나서 디버깅하는게 정말 힘듦
//unknown -> 마찬가지로 타입이 정해지지 않을 때 쓸 수 있지만 얘를 활용하려고 하면 오류가 난다.
var b = 3;
// let c: number = b  오류
// let c: number = a; 이건 오류가 안나는거임
var anyType;
var unknownType;
anyType = "hello";
unknownType = "hello";
// console.log(anyType.toUpperCase()); 오류 x
// console.log(unknownType.toUpperCase()); 오류 O
//타입 확정을 해주고 쓰는게 좋음
if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase());
}
//never : void랑 차이는 void는 리턴타입이 없음, never은 리턴타입이 있을 수가 없음
function infinite() {
    while (true) { }
}
function throwError() {
    throw new Error("항상 에러를 던집니다.");
}
var processAny = function (input) {
    return String(input);
};
var processUnknown = function (input) {
    if (typeof input === "string") {
        return input.toUpperCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    throw new Error("지원하지 않는 타입입니다.");
};
console.log(processAny("hello"));
console.log(processAny(42));
console.log(processAny(true));
console.log(processUnknown("hello"));
console.log(processUnknown(42));
console.log(processUnknown(true));
