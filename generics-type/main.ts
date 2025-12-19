export {};

//제네릭 타입이란 타입을 정의할 때가 아닌 호출할 때 타입을 정할 수 있는 구현 방법
//즉 범용적으로 사용할 수 있는 타입을 만들 수 있다는 것
type ArrayType<T> = T[];

const numberArray: ArrayType<number> = [1, 2, 3];
const stringArray: ArrayType<string> = ["a", "b", "c"];

//api 호출에서 많이 씀
type ApiResponse<T> = {
  status: string;
  totalPage: number;
  totalResult: number;
  page: number;
  data: T[]; //api 별로 다르게 들어오는 데이터에 대해 이렇게 처리해주면
  //하나씩 다 구현할 필요가 없음
};

type Movie = {
  name: string;
};

type Category = {
  title: string;
  genre: string;
};

type CategoryResponse = ApiResponse<Category>;
type MovieResponse = ApiResponse<Movie>;

//타입스크립트 리액트에서 쓸 때는 useState에서
//const [value, setValue] = useState<boolean>(false)

//1. 조건부 타입
type isString<T> = T extends string ? string : number;

//2. mapped type
type movie = {
  title: string;
  genre: string;
  rate: number;
};

//옵셔널한 타입 필드들이 필요한 경우에 이러게 mapped-type을 써서 가능함
type Subset<T> = {
  [K in keyof T]?: T[K];
};

//------------------------
interface Pair<T, U> {
  first: T;
  second: U;
  display(): void;
}

const pair: Pair<string, number> = {
  first: "noona",
  second: 2,
  display() {
    console.log(this.first + "는" + this.second + "살 입니다.");
  },
};

//문제 1
function getFirstElement<T>(array: T[]): T | undefined {
  return array[0];
}

console.log(getFirstElement([1, 2, 3])); // 1
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined

// function isNumberArray<T>(array: T[]): boolean {
//   if (array.every((item) => typeof item === "number")) {
//     return true;
//   }
//   return false;
// }

//문제 2
function isNumberArray<T>(array: T[]): boolean {
  return array.every((item) => typeof item === "number");
}

console.log(isNumberArray([1, 2, 3]));
console.log(isNumberArray(["a", "b", "c"]));
console.log(isNumberArray([]));

//문제 3
//배열이 아니면 false를 리턴한는 조건부 타입
type IsArray<T> = T extends any[] ? true : false;

type ArrayNum = IsArray<number[]>;
type ArrayStr = IsArray<string[]>;
type Num = IsArray<number>;
type Str = IsArray<string>;

//문제 4
// Mapped Type 정의
type WithDefault<T> = {
  [K in keyof T]: [T[K], T[K]];
};

type Original = {
  id: number;
  name: string;
  isActive: boolean;
};

type WithDefaults = WithDefault<Original>;

const ex: WithDefaults = {
  id: [1, 0],
  name: ["Alice", "Merry"],
  isActive: [true, false],
};

console.log(ex);

//문제 5
function pluck<T, K extends keyof T>(array: T[], key: K) {
  return array.map((item) => item[key]);
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

console.log(pluck(users, "id"));
console.log(pluck(users, "name"));
