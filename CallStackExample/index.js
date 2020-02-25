// Declare functions
const bar = () => console.log('bar');
const baz = () => console.log('baz');
const foo = () => {
  console.log('foo');
  bar();
  baz();
}
// Execute the root function 
foo();