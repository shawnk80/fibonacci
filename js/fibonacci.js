
const fibonacci = (num) => {


  // base cases 0 or 1
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  // recursive call F(n-1) + F(n-2)
  return fibonacci(num - 1) + fibonacci(num - 2)

}

module.exports = {fibonacci}