// Uncaught SyntaxError: Illegal break statement

// EXAMPLE 1 - Throwing an error in a try/catch to break out of `forEach()`

let arr = ['a', 'b', 'c'];

const BreakError = {};

try {
  arr.forEach(element => {
    if (element === 'b') {
      throw BreakError;
    }
    console.log(element); // 👉️ a
  });
} catch (err) {
  if (err !== BreakError) throw err;
}

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using a `for...of` loop instead of `forEach()`

// const arr = ['bobby', 'hadz', '.', 'com'];

// let index = 0;

// for (const element of arr) {
//   console.log(index);

//   if (element === 'hadz') {
//     break;
//   }
//   console.log(element); // 👉️ bobby

//   index += 1;
// }
