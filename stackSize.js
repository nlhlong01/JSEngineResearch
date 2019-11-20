let i = 0;
function foo() {
  i++;
  foo();
}
try {
  foo();
} catch (e) {
  let text = `Stack size: ${i}. [Error: ${e}]`;;
  console.log(text);
}