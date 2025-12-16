export {};

interface IStudent {
  name: string;
  age?: number;
  isStudent: boolean;
}
//인터페이스는 객체 타입으로만 정의가 가능
//ex) interface NewInterface = number|string 이런거 안됨

type newType = string | number; //이건 가능(타입은 원시, 튜플 등등 가능함)

type TStudent = {
  name: string;
  age?: number;
  isStudent: boolean;
};

let b: IStudent = {
  name: "이소영",
  isStudent: true,
};

let c: TStudent = {
  name: "이나영",
  isStudent: false,
};

//인터페이스 확장
interface IPerson {
  name: string;
  age: number;
}

interface IForeigner extends IPerson {
  nationality: string;
}

type TForeigner = IPerson | { nationality: string; period: Date };

let american: TForeigner = {
  nationality: "american",
  period: new Date(""),
};

//문제 1
//사용자 정보를 나타내는 인터페이스와 타입을 작성하라. 사용자 정보는 다음과 같은 구조를 가진다:
//id: 고유 ID (숫자)
//name: 이름 (문자열)
//email: 이메일 (문자열, 선택 속성)

interface IUser {
  id: number;
  name: string;
  email?: string;
}

const user1: IUser = {
  id: 1,
  name: "Alice",
};

const userWithEmail: IUser = {
  id: 2,
  name: "Bob",
  email: "bob@example.com",
};

//문제 2
//아래와 같은 구조를 나타내는 타입을 정의하고, 해당 타입을 기반으로 객체를 작성하라
// 사용자(User)는 다음 속성을 가집니다:
// id: 숫자
// name: 문자열
// address: 객체 ({city: 문자열,zipCode: 숫자})

type TUser = {
  id: number;
  name: string;
  address: {
    city: string;
    zipCode: number;
  };
};

const user: TUser = {
  id: 1,
  name: "Alice",
  address: {
    city: "Seoul",
    zipCode: 12345,
  },
};

console.log(user);

//문제 3
//1. 기본적으로 사용자 정보를 나타내는 User 인터페이스를 만드시오. (id, name, email?)

interface IUserInfo {
  id: number;
  name: string;
  email?: string;
}

//관리자 정보를 나타내는 Admin 인터페이스를 만들되, User 인터페이스를 확장하라. 관리자는 추가적으로 role 속성을 가진다. (role: 문자열)
interface IAdmin extends IUserInfo {
  role: string;
}

const normalUser: IUserInfo = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

const adminUser: IAdmin = {
  id: 2,
  name: "Bob",
  role: "Administrator",
};

//문제 4
//1. 기본적으로 상품 정보를 나타내는 Product 타입을 만드시오. (id, name, price)

type TProduct = {
  id: number;
  name: string;
  price: number;
};

type DiscountProduct = TProduct & {
  discount: number;
};

const normalProduct: TProduct = {
  id: 1,
  name: "Laptop",
  price: 1000,
};

const discountedProduct: DiscountProduct = {
  id: 2,
  name: "Smartphone",
  price: 800,
  discount: 10,
};

console.log(
  `${discountedProduct.name}은 ${discountedProduct.discount}% 할인해 ${
    discountedProduct.price -
    (discountedProduct.price * discountedProduct.discount) / 100
  }에 판매됩니다.`
);

//문제 5
//아래 조건을 만족하는 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하시오.

interface IProduct {
  id: number;
  name: string;
  price: number;
}

interface IOrder {
  orderId: number;
  products: IProduct[];
  totalPrice: number;
}

const order: IOrder = {
  orderId: 101,
  products: [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Mouse", price: 50 },
  ],
  totalPrice: 1050,
};

//문제 6
//아래 조건을 만족하는 타입과 인터페이스를 작성하고, 해당 타입을 기반으로 객체를 작성하라.

interface IBaseUser {
  id: number;
  name: string;
}

type TAdminUser = IBaseUser & {
  role: string;
};

type TGuestUser = IBaseUser & {
  visitCount: number;
};

const admin: TAdminUser = {
  id: 1,
  name: "Alice",
  role: "Administrator",
};

const guest: TGuestUser = {
  id: 2,
  name: "Bob",
  visitCount: 5,
};
