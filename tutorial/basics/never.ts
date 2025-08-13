/*
1️⃣ What is never in TypeScript?
never ek special type hai jo represent karta hai:
"Ye function ya expression kabhi koi value return nahi karega."
Matlab:
Ya to function error throw karega
Ya infinite loop me chalega
Ya execution ka end point kabhi nahi aayega
Iska matlab ye ki never type ka variable kabhi valid value hold nahi karega.

2️⃣ Why we use never?
Functions jo kuch return nahi karte aur kabhi successfully complete nahi hote.
Exhaustive checks me (e.g., switch-case me agar koi impossible case aa jaye).
Error handling ke liye type-safe code likhne me.

*/
function throwError(message: string): never {
  throw new Error(message);
}

throwError("Something went wrong!");
