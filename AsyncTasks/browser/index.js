const N_TASKS = 1000;

function calculateQueueSize() {
  for (let i = 0; i < N_TASKS; i++) {
    setTimeout(function done() {  }, 10000); // make sure no task is pushed to the queue until all tasks are started
  }
}

calculateQueueSize();