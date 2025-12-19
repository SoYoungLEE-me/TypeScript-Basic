"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
//리터럴 타입
var direction;
direction = "right";
var margin;
margin = "margin-left";
margin = "margin-right";
function getButtonClass(style) {
    switch (style) {
        case "primary":
            return "btn-primary";
        case "secondary":
            return "btn-secondary";
        case "danger":
            return "btn-danger";
        default:
            throw new Error("사용 불가한 스타일입니다.");
    }
}
console.log(getButtonClass("primary"));
console.log(getButtonClass("secondary"));
console.log(getButtonClass("danger"));
function handleRequestState(state) {
    switch (state) {
        case "loading":
            return "Loading, please wait...";
        case "success":
            return "Request successful!";
        case "error":
            return "There was an error processing your request.";
        default:
            throw new Error("알 수 없는 상태입니다.");
    }
}
console.log(handleRequestState("loading"));
console.log(handleRequestState("success"));
console.log(handleRequestState("error"));
//password만 빼고 가져오는 방식
var userProfile2 = {
    id: 15,
    name: "Soyoung",
    email: "soc07031@naver.com",
    age: 23,
    address: "경기도 양주시",
};
function updateAddress(address) {
    console.log(address);
}
//옵셔널하게 만들 수 있는 것!!
updateAddress({ street: "235", city: "seoul" });
function updateUserForm(user, updates) {
    return __assign(__assign({}, user), updates);
} //업데이트 함수
//...로 펼치면 같은 키가 있으면 뒤에 있는 값이 덮어씀
var currentUser = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
};
var updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));
// function getProfileSummary(user: UserProfile): BasicUserInfo {
//   return {
//     id: user.id,
//     name: user.name,
//   };
// }
function getProfileSummary(user) {
    var id = user.id, name = user.name;
    return { id: id, name: name };
}
var userProfile = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    address: "123 Main St",
};
console.log(getProfileSummary(userProfile));
// function filterSensitiveInfo(userInfo: UserInfo): publicUserInfo {
//   const { name, email, role } = userInfo;
//   return { name, email, role };
// }
function filterSensitiveInfo(userInfo) {
    var password = userInfo.password, publicInfo = __rest(userInfo, ["password"]);
    return publicInfo;
}
var userInfo = {
    name: "Alice",
    email: "alice@example.com",
    password: "1234",
    role: "admin",
};
console.log(filterSensitiveInfo(userInfo));
function createTeamMember(data) {
    return __assign({ name: "", email: "", role: "developer", isActive: true }, data);
}
function filterTeamMembers(members, filter) {
    return members.filter(function (member) {
        return member.role === filter.role && member.isActive === filter.isActive;
    });
}
function removeSensitiveInfo(members) {
    return members.map(function (_a) {
        var email = _a.email, rest = __rest(_a, ["email"]);
        return rest;
    });
}
var members = [
    {
        id: 1,
        name: "Alice",
        email: "alice@example.com",
        role: "developer",
        isActive: true,
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@example.com",
        role: "designer",
        isActive: false,
    },
    {
        id: 3,
        name: "Charlie",
        email: "charlie@example.com",
        role: "manager",
        isActive: true,
    },
];
var newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);
var activeDesigners = filterTeamMembers(members, {
    role: "designer",
    isActive: true,
});
console.log(activeDesigners);
var sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
