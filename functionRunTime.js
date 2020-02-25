function measureTime(fun, name) {
  const start = Date.now();
  fun();
  const millis = Date.now() - start;
  console.log(name + ': ' + millis/1000);
}


measureTime(() => {console.log('foo')}, 'console.log()'); // 0.007s
measureTime(() => {setTimeout(() => { }, 0)}, 'setTimeout() with 0s'); // 0.001s