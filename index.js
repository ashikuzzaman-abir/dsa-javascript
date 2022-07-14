const Stack = require("./dataStructures/stack");

const myStack = new Stack();

myStack.push(1);
myStack.push(12);
myStack.push(13);
myStack.push(14);
myStack.push(15);

console.log("size: ",myStack.size());
console.log("peeking: ", myStack.peek());
console.log("poped: ", myStack.pop());
console.log("size: ", myStack.size());
