const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // tuple
} = {
  // const person = {
  name: "akshay",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"], // tuple
};

console.log(person);
// console.log(person.work);

// Nested Object $ Types
const prodcut: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};
console.log(prodcut);

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

let temo: any[];
temo = ["Sports", 1];

for (const hobby of person.hobbies) {
  console.log(hobby);
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

// Tuples:
person.role.push("admin"); // Exception
// person.role[1] = 10;    // Error
// person.role = [0, 'admin', 'user'];    // Error

// Enums:
enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book,
}
console.log(PrintMedia);

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

console.log(Role);

const person1 = {
  name: "akshay",
  age: 21,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN, // tuple
};

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

if (person1.role === Role.ADMIN) {
  console.log("is admin");
}
