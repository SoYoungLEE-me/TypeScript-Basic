export {};
//리터럴 타입

let direction: "left" | "right";
direction = "right";

type Direction = "left" | "right";
type Margin = `margin-${Direction}`;

let margin: Margin;
margin = "margin-left";
margin = "margin-right";

//문제 1
type ButtonStyle = "primary" | "secondary" | "danger";

function getButtonClass(style: ButtonStyle): string {
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

//문제 2
type LoadingState = "loading" | "success" | "error";

function handleRequestState(state: LoadingState): string {
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

//유틸리티 타입
//1. Omit

interface User2 {
  id: number;
  name: string;
  email: string;
  password: string;
  age: number;
  address: string;
}

// interface publicUser {
//   id: number;
//   name: string;
//   email: string;
//   age: number;
// }

type publicUser = Omit<User2, "password">;
//password만 빼고 가져오는 방식

let userProfile2: publicUser = {
  id: 15,
  name: "Soyoung",
  email: "soc07031@naver.com",
  age: 23,
  address: "경기도 양주시",
};

//2. Pick
// interface BasicUserInfo {
//   id: number;
//   name: string;
// }
//id랑 name만 필요한 경우

type BasicUserInfo2 = Pick<User2, "id" | "name">;

//3. Partial => ?연산자와 같이 필수 필드가 아니게 만들 수 있는 함수

interface Address {
  street: string;
  city: string;
  country: string;
}

function updateAddress(address: Partial<Address>) {
  console.log(address);
}

//옵셔널하게 만들 수 있는 것!!
updateAddress({ street: "235", city: "seoul" });

//문제 1
type User = {
  name: string;
  email: string;
  password: string;
};

function updateUserForm(user: User, updates: Partial<User>): User {
  return {
    ...user,
    ...updates,
  };
} //업데이트 함수
//...로 펼치면 같은 키가 있으면 뒤에 있는 값이 덮어씀

const currentUser: User = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
};
const updatedForm = { email: "new-email@example.com" };
console.log(updateUserForm(currentUser, updatedForm));

//문제 2
type UserProfile = {
  id: number;
  name: string;
  email: string;
  address: string;
};

type BasicUserInfo = Pick<UserProfile, "id" | "name">;

// function getProfileSummary(user: UserProfile): BasicUserInfo {
//   return {
//     id: user.id,
//     name: user.name,
//   };
// }

function getProfileSummary(user: UserProfile): BasicUserInfo {
  const { id, name } = user;
  return { id, name };
}

const userProfile: UserProfile = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  address: "123 Main St",
};

console.log(getProfileSummary(userProfile));

//문제 3
type UserInfo = {
  name: string;
  email: string;
  password: string;
  role: string;
};

type PublicUserInfo = Omit<UserInfo, "password">;

// function filterSensitiveInfo(userInfo: UserInfo): publicUserInfo {
//   const { name, email, role } = userInfo;
//   return { name, email, role };
// }

function filterSensitiveInfo(userInfo: UserInfo): PublicUserInfo {
  const { password, ...publicInfo } = userInfo;
  return publicInfo;
}

const userInfo: UserInfo = {
  name: "Alice",
  email: "alice@example.com",
  password: "1234",
  role: "admin",
};

console.log(filterSensitiveInfo(userInfo));

//문제 4
type TeamMember = {
  id: number;
  name: string;
  email: string;
  role: "developer" | "designer" | "manager";
  isActive: boolean;
};

type CreateMemberArgs = Pick<TeamMember, "id"> &
  Partial<Omit<TeamMember, "id">>;

function createTeamMember(data: CreateMemberArgs): TeamMember {
  return {
    name: "",
    email: "",
    role: "developer",
    isActive: true,
    ...data, // data에 값이 있으면 위 기본값들을 덮어쓰도록
  };
}

function filterTeamMembers(
  members: TeamMember[],
  filter: Pick<TeamMember, "role" | "isActive">
): TeamMember[] {
  return members.filter(
    (member) =>
      member.role === filter.role && member.isActive === filter.isActive
  );
}

function removeSensitiveInfo(
  members: TeamMember[]
): Omit<TeamMember, "email">[] {
  return members.map(({ email, ...rest }) => rest);
}

const members: TeamMember[] = [
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

const newMember = createTeamMember({ id: 4, name: "Diana" });
console.log(newMember);

const activeDesigners = filterTeamMembers(members, {
  role: "designer",
  isActive: true,
});
console.log(activeDesigners);

const sanitizedMembers = removeSensitiveInfo(members);
console.log(sanitizedMembers);
