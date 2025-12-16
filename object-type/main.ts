//객체를 object 타입으로 선언하는 것은 의미 없음
//객체 안의 각각의 속성의 타입을 지정해주는 것이 일반적
export {};
let b: { name: string; age: number } = {
  name: "이소영",
  age: 23,
};

let c: { name: string; age?: number } = {
  name: "이소영",
}; //?는 선택적 속성으로 이렇게 해두면 속서이 없어도 오류가 안남

let d: { readonly name: string; age: number } = {
  name: "이소영",
  age: 23,
}; //처음값을 안바꾼다는 의미로 readonly 속성을 설정할 수 있음

//배열 선언 방법
let fruits: string[] = ["이소영", "이나영", "이수민"];
let number: Array<number> = [1, 2, 3, 4, 5];

//객체 배열
let students: { name: string; age: number }[] = [
  { name: "이소영", age: 24 },
  { name: "석수민", age: 19 },
];

//튜플 => 배열보다 더 엄격한 타입, 개수 타입 위치까지 맞아야함
let tuple: [string | number, number]; //|로 두개 이상의 타입을 지정 가능: 유니온 타입
tuple = ["이소영", 19];

//문제 1
let user: { name: string; age?: number; isAdmin: boolean } = {
  name: "Alice",
  isAdmin: true,
};

user = {
  name: "Bob",
  age: 40,
  isAdmin: false,
};

//문제 2
let numbers: readonly number[] = [1, 2, 3, 4, 5, 6, 7];

//문제 3
//1. 상품이름과 가격만을 포함하는 새로운 배열을 생성하는 함수를 작성
const products: [string, number, boolean][] = [
  ["Laptop", 1000, true],
  ["Shoes", 50, false],
  ["Book", 20, true],
];

const getProductNamesAndPrices = (
  products: [string, number, boolean][]
): [string, number][] => {
  const result = products.map((item): [string, number] => {
    return [item[0], item[1]];
  });
  return result;
};

console.log(getProductNamesAndPrices(products));

//2.재고가 있는 상품만 포함하는 배열을 반환하는 함수를 작성

const getAvailableProducts = (
  products: [string, number, boolean][]
): [string, number, boolean][] => {
  const result = products.filter((item) => item[2]);
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

const updateUser = (user: {
  name: string;
  age?: number;
}): { name: string; age: number } => {
  if (user.age == null) {
    return {
      ...user,
      age: 18,
    };
  }
  return {
    ...user,
    age: user.age,
  };
};

//?? : 왼쪽 값이 null 또는 undefined일 때만 오른쪽 값을 사용하는 연산자

console.log(updateUser({ name: "Charlie" }));
console.log(updateUser({ name: "Dana", age: 25 }));

//문제 5
//아래와 같은 데이터 구조를 사용하여 특정 카테고리에 해당하는 상품의 이름을 출력하는 함수를 작성
const products2: { name: string; price: number; category?: string }[] = [
  { name: "Laptop", price: 1000, category: "Electronics" },
  { name: "Shoes", price: 50, category: "Fashion" },
  { name: "Book", price: 20 },
];

const getProductsByCategory = (category: string): string[] => {
  let result = products2.filter((item) => {
    return item.category === category;
  });
  let productName = result.map((item) => {
    return item.name;
  });
  return productName;
};

console.log(getProductsByCategory("Electronics"));
console.log(getProductsByCategory("Fashion"));
console.log(getProductsByCategory("Books"));
