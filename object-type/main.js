//객체를 object 타입으로 선언하는 것은 의미 없음
//객체 안의 각각의 속성의 타입을 지정해주는 것이 일반적
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
var b = {
    name: "이소영",
    age: 23,
};
var c = {
    name: "이소영",
}; //?는 선택적 속성으로 이렇게 해두면 속서이 없어도 오류가 안남
var d = {
    name: "이소영",
    age: 23,
}; //처음값을 안바꾼다는 의미로 readonly 속성을 설정할 수 있음
//배열 선언 방법
var fruits = ["이소영", "이나영", "이수민"];
var number = [1, 2, 3, 4, 5];
//객체 배열
var students = [
    { name: "이소영", age: 24 },
    { name: "석수민", age: 19 },
];
//튜플 => 배열보다 더 엄격한 타입, 개수 타입 위치까지 맞아야함
var tuple; //|로 두개 이상의 타입을 지정 가능: 유니온 타입
tuple = ["이소영", 19];
//문제 1
var user = {
    name: "Alice",
    isAdmin: true,
};
user = {
    name: "Bob",
    age: 40,
    isAdmin: false,
};
//문제 2
var numbers = [1, 2, 3, 4, 5, 6, 7];
//문제 3
//1. 상품이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성
var products = [
    ["Laptop", 1000, true],
    ["Shoes", 50, false],
    ["Book", 20, true],
];
var getProductNamesAndPrices = function (products) {
    var result = products.map(function (item) {
        return [item[0], item[1]];
    });
    return result;
};
console.log(getProductNamesAndPrices(products));
//2.재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성
var getAvailableProducts = function (products) {
    var result = products.filter(function (item) { return item[2]; });
    return result;
};
console.log(getAvailableProducts(products));
//문제 4
//사용자 정보를 업데이트하는 함수를 작성. 나이가 제공되지 않으면 기본값으로 18로 세팅
// const updateUser = (user: {
//   name: string;
//   age?: number;
// }): { name: string; age: number } => {
//   return {
//     ...user,
//     age: user.age ?? 18,
//   };
// };
var updateUser = function (user) {
    if (user.age == null) {
        return __assign(__assign({}, user), { age: 18 });
    }
    return __assign(__assign({}, user), { age: user.age });
};
//?왼쪽 값이 null 또는 undefined일 때만 오른쪽 값을 사용하는 연산자
console.log(updateUser({ name: "Charlie" }));
console.log(updateUser({ name: "Dana", age: 25 }));
//문제 5
//아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성
var products2 = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 50, category: "Fashion" },
    { name: "Book", price: 20 },
];
var getProductsByCategory = function (category) {
    var result = products2.filter(function (item) {
        return item.category === category;
    });
    var productName = result.map(function (item) {
        return item.name;
    });
    return productName;
};
console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []
