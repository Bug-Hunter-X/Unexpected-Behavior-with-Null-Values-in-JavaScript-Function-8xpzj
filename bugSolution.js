function foo(a, b) {
  if (a === null || b === null) {
    console.error("Null values are not allowed.");
    return;
  }
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Invalid input: Both parameters should be numbers.');
    return;
  }
  console.log(a + b);
}

foo(1, null); // Output: Error message
foo(null, 1); // Output: Error message
foo(1, 2); // Output: 3
foo("a", 1); //Output: Error message