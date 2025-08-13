function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log(calculateTotal(500, 2)); // ✅ 1000
console.log(calculateTotal("500", 2)); // ❌ Compile-time error
