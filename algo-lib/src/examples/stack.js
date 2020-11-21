const Stack = require('../../lib/Stack.js');

function numberToBinary(num) {
  const stack = new Stack();
  while (num > 0) {
    stack.push(num % 2);
    num = Math.floor(num / 2);
  }
  let str = '';
  while (!stack.isEmpty) {
    str += stack.pop();
  }
  return str;
}

console.log(numberToBinary(10));
