export {};
//리터럴 타입

let direction: "left" | "right";
direction = "right";

type Direction = "left" | "right";
type Margin = `margin-${Direction}`;

let margin: Margin;
margin = "margin-left";
margin = "margin-right";

//문제 1
type ButtonStyle = "primary" | "secondary" | "danger";

function getButtonClass(style: ButtonStyle): string {
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

//문제 2
type LoadingState = "loading" | "success" | "error";

function handleRequestState(state: LoadingState): string {
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
