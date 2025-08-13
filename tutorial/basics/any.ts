/*
1️⃣ What is any in TypeScript?
any ek special type hai jo TypeScript me type checking ko completely disable kar deta hai.
Matlab agar tum kisi variable ka type any kar dete ho, to tum usme kisi bhi type ka data assign kar sakte ho
 (string, number, boolean, object, array… kuch bhi).
Ye bilkul JavaScript ke default behavior jaisa ho jata hai.
2️⃣ Why we use any?
any ka use mostly tab hota hai jab:
Type unknown ho — e.g., API se data aa raha hai lekin tumhe exact structure pata nahi hai.
Migration from JavaScript — jab tum JavaScript project ko TypeScript me convert kar rahe ho aur har variable ka type abhi define nahi kiya.
Dynamic data handle karna — jab variable me multiple types aa sakte hain aur tum specific check nahi karna chahte.
⚠️ But: any ka zyada use karna TypeScript ka fayda khatam kar deta hai, kyunki TypeScript ka main purpose hi type safety dena hai.
*/
let myVar: any;

myVar = "Hello"; // ✅ OK
myVar = 123; // ✅ OK
myVar = true; // ✅ OK
myVar = { name: "Prince" }; // ✅ OK
myVar = [1, 2, 3]; // ✅ OK
