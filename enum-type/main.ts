export {};
enum Gender {
  FEMALE = "Female",
  MALE = "Male",
}

let gender: Gender = Gender.MALE;

//enum은 자바스크립에서 트리쉐이킹이 안됨. -> const로 선언
//트리쉐이킹이란 쓸데 없는 코드를 빼고 코드 사이즈를 줄여 퍼포먼스를 올리는 것

const enum SearchType {
  Data = "Date",
  KEYWORD = "keyword",
  ORDER = "Order",
}

console.log("hey", SearchType.ORDER);
