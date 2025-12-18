export {};
//타입 확장 : 한 타입을 기반으로 다른 타입을 정의하는 방식, 상속과 계층적인 관계
type Product1 = {
  id: string;
  name: string;
  price: number;
};

type DiscountProduct1 = Product & { discountRatio: number };

//교차 타입 : 두 타입을 합셩하여 모든 속성을 하나로 결합하는 타입
type Popularity = {
  rate: number;
};

interface Review {
  review: number;
}

type Filter = Popularity & Review;

let filter: Filter = {
  rate: 2.3,
  review: 3,
};

//문제 1.
//상품(Product)과 할인(Discount) 정보를 병합하여 새로운 타입을 정의하고, 할인 적용 후의 가격을 계산하는 함수를 작성하라

type Product = {
  id: number;
  name: string;
  price: number;
};

type Discount = {
  discountPercentage: number;
};

const calculateDiscountedPrice = (item: Product & Discount): number => {
  let result = item.price - item.price * (item.discountPercentage / 100);
  return result;
};

const discountedProduct: Product & Discount = {
  id: 101,
  name: "Laptop",
  price: 1000,
  discountPercentage: 20,
};

console.log(calculateDiscountedPrice(discountedProduct));

//문제 2.
//아래의 조건에 따라 복합 데이터를 처리하는 타입을 정의하고, 관련된 함수를 작성하시오.

type ContactInfo = {
  phone: string;
  address: string;
};

type OrderInfo = {
  orderId: number;
  items: string[];
};

const printOrderSummary = (order: ContactInfo & OrderInfo): string => {
  let result = `order : ${order.orderId} (Phone : ${order.phone})`;
  return result;
};

const orderDetails: ContactInfo & OrderInfo = {
  phone: "123-456-7890",
  address: "123 Main St",
  orderId: 2023,
  items: ["Laptop", "Mouse"],
};

console.log(printOrderSummary(orderDetails));

//문제 3.
//사용자 프로필과 활동 기록 병합

type Profile = {
  id: number;
  name: string;
  email: string;
};

type Activity = {
  lastLogin: Date;
  actions: string[];
};

type UserData = Profile & Activity;

const mergeUserData = (profile: Profile, activity: Activity): UserData => {
  return {
    ...profile,
    ...activity,
  };
};

const getUserSummary = (user: UserData): string => {
  let result = `사용자 ${user.id} - ${user.name} (${user.email} - 마지막 로그인 : ${user.lastLogin})`;
  return result;
};

const profile: Profile = { id: 1, name: "Alice", email: "alice@example.com" };
const activity: Activity = {
  lastLogin: new Date("2024-01-01T10:00:00Z"),
  actions: ["login", "viewed dashboard", "logout"],
};

const mergedUser = mergeUserData(profile, activity);
console.log(getUserSummary(mergedUser));
