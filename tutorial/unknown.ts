/*
1️⃣ What is unknown in TypeScript?
unknown ek special type hai jo bolta hai:
"Mujhe abhi nahi pata is variable ka type kya hoga, lekin use karne se pehle tumhe check karna padega."
Matlab unknown me tum kuch bhi assign kar sakte ho (string, number, boolean, object, etc.), but us variable ko directly use nahi kar sakte without type checking.
2️⃣ Why we use unknown?
Jab data ka type runtime pe decide hota hai (e.g., API se aane wala data).
Jab tum flexible variable chahte ho but still type safety maintain karni hai.
any ke alternative ke roop me, taaki TypeScript ka benefit bana rahe.
*/
let value: unknown = "Prince";

if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Now OK
}
