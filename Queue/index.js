const v8 = require('v8');
// Initially used heap size
const INIT_USED_HEAP_SIZE = v8.getHeapStatistics().used_heap_size;
const N_TASKS = 13000000;

// Pumping tasks to the brower APIs 
for (let i = 0; i < N_TASKS; i++) {
  setTimeout(() => { }, 0);
}

// Currently used heap size
const totalHeapUsed = v8.getHeapStatistics().used_heap_size - INIT_USED_HEAP_SIZE;
// Heap size used by each task
const heapUsedPerTask = totalHeapUsed / N_TASKS;

console.log(`
  Number of messages: ${N_TASKS}\n
  Total heap used: ${totalHeapUsed / 1000000} MB\n
  Heap used per message: ${heapUsedPerTask} B
`);