"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//리터럴 타입
var direction;
direction = "right";
var margin;
margin = "margin-left";
margin = "margin-right";
function getButtonClass(style) {
    switch (style) {
        case "primary":
            return "btn-primary";
        case "secondary":
            return "btn-secondary";
        case "danger":
            return "btn-danger";
        default:
            throw new Error("사용 불가한 스타일입니다.");
    }
}
console.log(getButtonClass("primary"));
console.log(getButtonClass("secondary"));
console.log(getButtonClass("danger"));
function handleRequestState(state) {
    switch (state) {
        case "loading":
            return "Loading, please wait...";
        case "success":
            return "Request successful!";
        case "error":
            return "There was an error processing your request.";
        default:
            throw new Error("알 수 없는 상태입니다.");
    }
}
console.log(handleRequestState("loading"));
console.log(handleRequestState("success"));
console.log(handleRequestState("error"));
