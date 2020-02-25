const v8 = require('v8');
const INIT_USED_HEAP_SIZE = v8.getHeapStatistics().used_heap_size;
const N_TASKS = 1000000;

function calculateQueueSize() {
  for (let i = 0; i < N_TASKS; i++) {
    setTimeout(() => { }, 10000); // make sure no task is pushed to the queue until all tasks are started
  }
}

calculateQueueSize();
const totalHeapUsed = v8.getHeapStatistics().used_heap_size - INIT_USED_HEAP_SIZE;
const heapUsedPerTask = totalHeapUsed / N_TASKS;

console.log(`
  Number of async tasks: ${N_TASKS}\n
  Total heap used: ${totalHeapUsed}\n
  Heap per task: ${heapUsedPerTask}
`);