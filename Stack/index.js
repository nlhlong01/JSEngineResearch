function calculateStackSize() {
  let i = 0;

  function recurse() {
    i++;
    recurse();
  }

  try {
    recurse();
  } catch (e) {
    // Print the result to the screen
    document.write(`Stack size: ${i}. [Error: ${e}]`);
  }
};

calculateStackSize();