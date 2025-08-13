/*
TypeScript ek superset hai JavaScript ka, jo type safety aur extra features add karta hai.
Matlab, tum JavaScript ka code likh sakte ho, lekin TypeScript me tum variables, functions, objects ko type specify
 karke likhoge, taaki compile time me errors pakde ja sakein.
*/
// String type
let myName: string = "Prince";
console.log("Name:", myName);

// Number type
let myAge: number = 25;
console.log("Age:", myAge);

// Boolean type
let isDeveloper: boolean = true;
console.log("Is Developer:", isDeveloper);

//---------------------------------------------------------------------------------------------------------
// Undefined example
let userName: string | undefined;
console.log("User Name:", userName); // undefined

// Null example
let userAge: number | null = null;
console.log("User Age:", userAge); // null

// Assigning values later
userName = "Prince";
userAge = 25;

console.log("Updated User Name:", userName); // Prince
console.log("Updated User Age:", userAge); // 25
