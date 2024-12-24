function foo(a, b) {
  if (a === null || b === null) {
    return;
  }
  console.log(a + b);
}

foo(1, null); // Output: undefined
foo(null, 1); // Output: undefined
foo(1, 2); // Output: 3