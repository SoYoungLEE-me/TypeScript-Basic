export {};
//union-type
// type Track = {
//   title: string;
//   releaseDate: string;
// };

// type Artist = {
//   name: string;
//   releaseDate: string;
// };

// type SearchResult = Track | Artist;

//타입 좁히기 필수

//1. typeof
//원시타입만 잡아낼 수 있다는 단점 존재
//객체의 경우 객체의 정확한 타입까지는 못잡아냄

type SearchType = number | string;

const searchByKeyword = (keyword: SearchType): string => {
  if (typeof keyword === "number") {
    return keyword.toString();
  }
  return keyword;
};

//2. instanceof
//객체의 타입을 잡아낼 수 있음, 근데 이제 자바스크립트에서 가지고 있는 인스턴스만..

type Period = {
  start: string;
  end: string;
};

type SearchType2 = Period | Date;

const getDate = (day: SearchType2): Date => {
  if (day instanceof Date) {
    return day;
  }
  return new Date(day.start);
};

getDate({ start: "2025-12-18", end: "" });

//3. in

type Track = {
  title: string;
  releaseDate: string;
};

type Artist = {
  name: string;
  releaseDate: string;
};

const getName = (result: Track | Artist) => {
  if ("title" in result) {
    //일단 title이란 필드가 있는지부터 확인
    return result.title;
  }
  return result.name;
};

//4. is
//타입 가드를 만들 때 많이 씀

//function 타입가드(변수:any) :변수 is 특정타입{
//     return 조건식;
// }

type Cat = { meow: () => void };
type Dog = { bark: () => void };

type Animal = Cat | Dog;

function isCat(animal: Animal): animal is Cat {
  return "meow" in animal;
}

function sound(animal: Animal) {
  if (isCat(animal)) {
    animal.meow();
  } else {
    animal.bark();
  }
}

//유니온 타입의 단점: 짬뽕될 수 있음.
//이럴 때 리터럴 타입을 선언해줘야함
type Track2 = {
  type: "track";
  title: string;
  releaseDate: string;
};

type Artist2 = {
  type: "artist";
  name: string;
  releaseDate: string;
};

const result: Track2 | Artist2 = {
  type: "track",
  title: "hey",
  releaseDate: "2025",
};

//문제 1.
// 다양한 데이터 타입을 입력받아, 입력에 따라 다른 처리를 수행하는 함수를 작성하시오.

type Input =
  | string[]
  | number[]
  | {
      message: string;
    };

function isNumberArray(input: Input): input is number[] {
  return (
    Array.isArray(input) && input.every((item) => typeof item === "number")
  );
}

function isStringArray(input: Input): input is string[] {
  return (
    Array.isArray(input) && input.every((item) => typeof item === "string")
  );
}

function isMessageObj(input: Input): input is { message: string } {
  return (
    typeof input === "object" &&
    input !== null &&
    !Array.isArray(input) &&
    "message" in input
  );
}

function processInput(input: Input): number | string {
  if (isNumberArray(input)) {
    return input.reduce((a, b) => a + b, 0);
  }

  if (isStringArray(input)) {
    return input.join("");
  }

  if (isMessageObj(input)) {
    return input.message.toUpperCase();
  }

  throw new Error("지원하지 않는 타입입니다.");
}

console.log(processInput([1, 2, 3])); // 6
console.log(processInput(["hello", "world"]));
console.log(processInput({ message: "TypeScript" }));

//문제 2.
class Car {
  constructor(public brand: string) {}
}

class Bike {
  constructor(public type: string) {}
}

type Vehicle = Car | Bike;

function processVehicle(vehicle: Vehicle): string {
  if (vehicle instanceof Car) {
    return vehicle.brand.toUpperCase();
  }

  if (vehicle instanceof Bike) {
    return `Bike: ${vehicle.type}`;
  }

  throw new Error("지원하지 않는 차량 타입입니다.");
}

const myCar = new Car("Tesla");
const myBike = new Bike("Mountain");

console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"

//문제 3.
type Admin = { type: "admin"; permissions: string[] };
type User = { type: "user"; email: string };

function processUser(user: Admin | User): string {
  if ("permissions" in user) {
    return user.permissions.join(",");
  }

  if ("email" in user) {
    return user.email;
  }

  throw new Error("지원하지 않는 타입입니다.");
}

// 테스트
console.log(processUser({ type: "admin", permissions: ["read", "write"] })); // "read,write"

console.log(processUser({ type: "user", email: "user@example.com" })); // "user@example.com"

//문제 4.
type Rectangle = { width: number; height: number };
type Circle = { radius: number };

type Shape = Rectangle | Circle;

function isRectangle(shape: Shape): shape is Rectangle {
  return "width" in shape && "height" in shape;
}

function calculateArea(shape: Rectangle | Circle): number {
  if (isRectangle(shape)) {
    return shape.width * shape.height;
  }

  return Math.PI * shape.radius ** 2;
}

// 테스트
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // ≈153.94

//문제 5.
type Square = { type: "square"; side: number };
type Circle2 = { type: "circle"; radius: number };

type Shape2 = Square | Circle2;

function calculateArea2(shape: Shape2): number {
  if (shape.type === "square") {
    return shape.side * shape.side;
  } else if (shape.type === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return exhaustiveCheck(shape);
  }
}

function exhaustiveCheck(param: never): never {
  throw new Error("에러");
}

console.log(calculateArea2({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea2({ type: "circle", radius: 7 }));
