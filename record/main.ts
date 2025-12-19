export {};
//레코드
//타입 값이 동적으로 오는 상황에서 쓰기 좋음
//그러니까 타입에 어떤 값이 오는지 정확하게 모를 때
//ex)API에서 키가 뭐가 올지 모를 때, 사용자 입력이 키가 될 때 등등

type StringNumberMap = Record<string, number>; //첫번째는 키의 타입, 두번째는 값의 타입
// type StringNumberMap= {
//     [key: string]: number;
//   }; 과 동일

const example: StringNumberMap = {
  apple: 1,
  orange: 2,
  mango: 9,
};

// 예를 들어
// type User = {
//     id: number;
//     name: string;
//   };
//  이건 객체에 무조건 id, name이 있어야 한다는 것인데 만약 이렇게 객체 값이 뭐가 있는지 정확하게 모를 때 record를 쓴다 이말

type UserRole = "admin" | "user" | "guest";

type RolePermission = Record<UserRole, string>;

type Product = { id: string; name: string; price: number };

type ProductInventory = Record<string, Product>;

const inventoryResponse: ProductInventory = {
  apple: { id: "1", name: "apple", price: 2000 },
};

//문제 1
type RegionCode = "US" | "EU" | "ASIA" | "AFRICA";

type ShippingCost = Record<RegionCode, number>;

const shippingCosts: ShippingCost = {
  US: 10,
  EU: 15,
  ASIA: 20,
  AFRICA: 25,
};

function calculateShippingCost(
  region: RegionCode,
  costs: ShippingCost
): number {
  return costs[region];
}

console.log(calculateShippingCost("US", shippingCosts));
console.log(calculateShippingCost("EU", shippingCosts));
console.log(calculateShippingCost("ASIA", shippingCosts));
console.log(calculateShippingCost("AFRICA", shippingCosts));

//문제 2
type Score = Record<string, number>;

const scores: Score = {
  Alice: 85,
  Bob: 92,
  Charlie: 78,
};

function calculateAverageScore(scores: Score): number {
  const keys = Object.keys(scores);
  const sum = keys.reduce((acc, key) => acc + scores[key], 0);
  return sum / keys.length;
}

console.log(calculateAverageScore(scores));

//문제 4
type ProductPrice = Record<string, number>;

const prices: ProductPrice = {
  Laptop: 1000,
  Phone: 500,
  Tablet: 300,
};

function updateProductPrice(
  prices: ProductPrice,
  product: string,
  newPrice: number
): ProductPrice {
  if (!(product in prices)) {
    throw new Error("존재하지 않는 상품입니다.");
  }
  return {
    ...prices,
    [product]: newPrice,
  };
}

console.log(updateProductPrice(prices, "Phone", 550));
