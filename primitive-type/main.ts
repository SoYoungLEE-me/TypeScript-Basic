//string, number, boolean, null, undefined

export {};

let a: number = 3;
a = 4;
a = 10.2;

console.log(a);

let b: null = null;

let c: undefined = undefined;

// null과 undefined의 차이:
// 둘 다 값이 없는 상태를 의미하지만,
// undefined는 "아직 값이 할당되지 않음"을 의미하고
// null은 "의도적으로 값이 없음을 명시"한 것이다.

const double = (n: number): number => {
  return n * 2;
};

let result = double(2);
console.log(result);

// TypeScript는 브라우저나 Node.js가 직접 실행할 수 없기 때문에
// tsc(TypeScript Compiler)를 사용해 JavaScript로 변환하는 과정이 필요하다.
// tsc main.ts는 TypeScript 코드를 JavaScript 코드로 컴파일하고,
// node main.js는 변환된 JavaScript 파일을 Node.js 환경에서 실행한다.

//문제 1
let userName: string;
let userAge: number;
let isAdmin: boolean;

userName = "Alice";
userAge = 25;
isAdmin = true;

//문제 2
let productName: string = "맘스터치 싸이버거 세트";
let productPrice: number = 7100;
let isSoldOut: boolean = true;

let isAvailable: string;

if (isSoldOut == true) {
  isAvailable = "품절";
} else {
  isAvailable = "주문 가능";
}

console.log(
  `상품명: ${productName}, 가격: ${productPrice}, 재고 여부: ${isAvailable} 상태 `
);

//문제 3
const addNumbers = (a: number, b: number): number => {
  return a + b;
};

console.log(addNumbers(5, 3));

//문제 4
const stringifyValue = (value: string | null | undefined): string => {
  if (typeof value == "string") {
    return value;
  } else {
    return "값이 없습니다.";
  }
};

console.log(stringifyValue("Hello"));
console.log(stringifyValue(null));
console.log(stringifyValue(undefined));

//문제 5
function compareValues(a: unknown, b: unknown): string {
  if (a === b) {
    return "엄격한 동등성";
  } else if (a == b) {
    return "느슨한 동등성";
  } else {
    return "동등하지 않음";
  }
}

// 함수 호출 예시
console.log(compareValues(5, "5")); // 느슨한 동등성
console.log(compareValues(null, undefined)); // 동등하지 않음
console.log(compareValues(false, 0)); // 느슨한 동등성
console.log(compareValues(NaN, NaN)); // 엄격한 동등성
console.log(compareValues(42, 42)); // 엄격한 동등성

//null과 undefined는 “값이 없음을 의미하는 두 상태”로 == 비교에서는 같다고 취급
//NaN은 어떤 값과도 같지 않다.(자기 자신 포함)

//문제 6
const isPrimitive = (value: unknown): boolean => {
  if (value === null || typeof value !== "object") {
    return true;
  } else {
    return false;
  }
};

console.log(isPrimitive("Hello"));
console.log(isPrimitive(42));
console.log(isPrimitive(false));
console.log(isPrimitive(null));
console.log(isPrimitive(undefined));
console.log(isPrimitive({}));
console.log(isPrimitive([]));
