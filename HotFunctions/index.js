const N = 1; // Number of iterations

// Check if a number is prime
function isPrime(n) {
  let max = Math.sqrt(n);
  for (let i = 2; i <= max; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Find all prime numbers smaller than 1000
function findSmallerPrimes() {
  for (let i = 0; i < 1000; i++) {
    isPrime(i);
  }
}

// Iterate on the function above
function iterate(n) {
  for (let i = 0; i < n; i++) {
    findSmallerPrimes();
  }
}

iterate(N);