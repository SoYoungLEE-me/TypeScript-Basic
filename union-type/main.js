"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var searchByKeyword = function (keyword) {
    if (typeof keyword === "number") {
        return keyword.toString();
    }
    return keyword;
};
var getDate = function (day) {
    if (day instanceof Date) {
        return day;
    }
    return new Date(day.start);
};
getDate({ start: "2025-12-18", end: "" });
var getName = function (result) {
    if ("title" in result) {
        //일단 title이란 필드가 있는지부터 확인
        return result.title;
    }
    return result.name;
};
function isCat(animal) {
    return "meow" in animal;
}
function sound(animal) {
    if (isCat(animal)) {
        animal.meow();
    }
    else {
        animal.bark();
    }
}
var result = {
    type: "track",
    title: "hey",
    releaseDate: "2025",
};
function isNumberArray(input) {
    return (Array.isArray(input) && input.every(function (item) { return typeof item === "number"; }));
}
function isStringArray(input) {
    return (Array.isArray(input) && input.every(function (item) { return typeof item === "string"; }));
}
function isMessageObj(input) {
    return (typeof input === "object" &&
        input !== null &&
        !Array.isArray(input) &&
        "message" in input);
}
function processInput(input) {
    if (isNumberArray(input)) {
        return input.reduce(function (a, b) { return a + b; }, 0);
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
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike(type) {
        this.type = type;
    }
    return Bike;
}());
function processVehicle(vehicle) {
    if (vehicle instanceof Car) {
        return vehicle.brand.toUpperCase();
    }
    if (vehicle instanceof Bike) {
        return "Bike: ".concat(vehicle.type);
    }
    throw new Error("지원하지 않는 차량 타입입니다.");
}
var myCar = new Car("Tesla");
var myBike = new Bike("Mountain");
console.log(processVehicle(myCar)); // "TESLA"
console.log(processVehicle(myBike)); // "Bike: Mountain"
function processUser(user) {
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
function isRectangle(shape) {
    return "width" in shape && "height" in shape;
}
function calculateArea(shape) {
    if (isRectangle(shape)) {
        return shape.width * shape.height;
    }
    return Math.PI * Math.pow(shape.radius, 2);
}
// 테스트
console.log(calculateArea({ width: 10, height: 5 })); // 50
console.log(calculateArea({ radius: 7 })); // ≈153.94
function calculateArea2(shape) {
    if (shape.type === "square") {
        return shape.side * shape.side;
    }
    else if (shape.type === "circle") {
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else {
        return exhaustiveCheck(shape);
    }
}
function exhaustiveCheck(param) {
    throw new Error("에러");
}
console.log(calculateArea2({ type: "square", side: 5 })); // 기대 출력: 25
console.log(calculateArea2({ type: "circle", radius: 7 }));
