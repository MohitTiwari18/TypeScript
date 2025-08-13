/*
1️⃣What is Type Annotation?
Type annotation ka matlab hai:
Variable / parameter / return type ke saath type specify karna using : typeName syntax.
Iska format hota hai:
let variableName: type = value;

2️⃣Why We Use Type Annotation?
TypeScript ko bataane ke liye ki hum kis type ka data store karenge.
Compile-time errors avoid karne ke liye.
Code ko zyada readable aur maintainable banane ke liye.
IntelliSense aur autocompletion better karne ke liye.
*/
function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calculateTotal(500, 2)); // ✅ 1000
