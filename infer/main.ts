export {};

//유니온 타입은 type:"track" 의 유니온이라는 장치를 통해서 타입 좁히기를 할 수 있었음
//하지만 모든 타입에 유니온 장치를 넣을 수는 없음
//그럴 때는 밑의 예시와 같이 제네릭과 extends를 이용해 진행할 수 있음

interface Track {
  title: string;
  releaseDate: string;
}

interface Artist {
  name: string;
  debutYear: number;
}

type SearchItem<T extends "track" | "artist"> = T extends "track"
  ? Track
  : Artist;

const result: SearchItem<"track"> = {
  title: "hey",
  releaseDate: "2203",
};

//2. infer => 타입 추론

// 함수의 리턴값을 추론하는 예시
//리턴값이 있으면 그걸 쓰고 없으면 never로
type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R
  ? R
  : never;

function getUserInfo() {
  return { name: "Alice", age: 21 };
}

type UserInfo = ReturnTypeOfFunction<typeof getUserInfo>;

//promise객체의 타입 추론에도 쓰임
//promise에 감싸져서 나온 어떤 객체의 타입을 추론하고 싶다.
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

type PromiseString = Promise<string>;

type Result = UnwrapPromise<PromiseString>;

//배열의 요소의 타입추론
type ElementsType<T> = T extends infer U ? U : T;

type ArrayOfNumbers = Artist[];

type SingleNumber = ElementsType<ArrayOfNumbers>;

//2. as
//타입 추론이 잘 안 됐을 때 as를 통해서 강제로 타입 추론을 시켜줌

let someValue: unknown = "Hello world";

let newValue = someValue as string;

console.log(newValue.length);

//Dom 조작에서 많이 씀
// 타입스크립트 컴파일에서는 HTMl Element인걸 모르기 때문에 dom 조작의 속상과 메서드에서 오류가남
//그럴 때 많이 씀

// const inputElement = document.querySelector("input");

// const input = inputElement as HTMLInputElement;

// input.value = "1111";

//dom 요소와 같이 정말 타입 확정이 필요한 순간이 아니면 너무 남발하면 안됨

//문제 1
type ExtractReturnType<F> = F extends (...arg: any[]) => infer R ? R : F;

type Test1 = ExtractReturnType<() => string>;
type Test2 = ExtractReturnType<(x: number) => boolean>;
type Test3 = ExtractReturnType<(x: number, y: string) => { id: number }>;

//문제 2
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  key as keyof T;
  return obj[key];
}

const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

console.log(getValue(user, "name"));
console.log(getValue(user, "email"));

//문제 3
type RequestData<T> = T extends "text"
  ? string
  : T extends "json"
  ? Record<string, any>
  : T extends "binary"
  ? Uint8Array
  : never;

function processRequest<T extends "text" | "json" | "binary">(
  type: T,
  data: RequestData<T>
): string {
  return `Processed: ${data}`;
}

console.log(processRequest("text", "Hello"));
console.log(processRequest("json", { key: "value" }));
console.log(processRequest("binary", new Uint8Array([72, 101, 108, 108, 111])));
