/*
TypeScript ek superset hai JavaScript ka, jo type safety aur extra features add karta hai.
Matlab, tum JavaScript ka code likh sakte ho, lekin TypeScript me tum variables, functions, objects ko type specify
 karke likhoge, taaki compile time me errors pakde ja sakein.
*/
// String type
var myName = "Prince";
console.log("Name:", myName);
// Number type
var myAge = 25;
console.log("Age:", myAge);
// Boolean type
var isDeveloper = true;
console.log("Is Developer:", isDeveloper);
//---------------------------------------------------------------------------------------------------------
// Undefined example
var userName;
console.log("User Name:", userName); // undefined
// Null example
var userAge = null;
console.log("User Age:", userAge); // null
// Assigning values later
userName = "Prince";
userAge = 25;
console.log("Updated User Name:", userName); // Prince
console.log("Updated User Age:", userAge); // 25
