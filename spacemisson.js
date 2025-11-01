// Task 1: Declare The Task Array and The Interval ID
// TODO: Begin by declaring an array to hold your one-time tasks (`oneTimeTasks`) and variables for any interval IDs you'll need for continuous tasks (`monitoringTaskId`)
let oneTimeTasks = [];
let monitoringTaskId;

// Task 2: Add One-Time Task Function
function addOneTimeTask(funk, delay) {
  oneTimeTasks.push({ function: funk, delay: delay });
  // TODO: Write a function named `addOneTimeTask` that accepts a function (`func`) and a delay (`delay`) as parameters. This function should add an object containing both parameters into the `oneTimeTasks` array.
}

// Task 3: Run One-Time Tasks Function
function runOneTimeTasks() {
  for (let oneTimeTask of oneTimeTasks)
    setTimeout(oneTimeTask.function, oneTimeTask.delay);
  // TODO: Create a function named `runOneTimeTasks` that iterates over the `oneTimeTasks` array and uses `setTimeout` to schedule each task according to its delay.
}

// Task 4: Start Monitoring Function
function startMonitoring() {
  console.log("Starting monitoring of space station.");

  monitoringTaskId = setInterval(function () {
    console.log("Monitoring space station conditions...");

    /* Condition checks. */
    const airQuality = Math.random() * 100; //% of oxygen level
    const powerLevel = Math.random() > 0.2 ? "Power" : "No Power";
    const communicationCheck = Math.random() > 0.6 ? "All systems go" : "Error";
    console.log(
      `Oxygen Level: ${airQuality.toFixed(
        2
      )}% | Power Status: ${powerLevel} | Communication: ${communicationCheck}`
    );
  }, 3365); // Adjust this interval as needed.
}
// TODO: Write a function named `startMonitoring` that uses `setInterval` to simulate continuous monitoring. This function should print a message every few seconds and store the interval ID in `monitoringTaskId`.

// Task 5: Stop Monitoring Function
function stopMonitoring() {
  {
    clearInterval(monitoringTaskId);
    console.log("Monitoring stopped.");
  }

  // TODO: Implement a function named `stopMonitoring` that stops the continuous monitoring by using `clearInterval` on `monitoringTaskId`.
}

// Task 6: Start Countdown Function
function startCountdown(duration) {
  let timeLeft = duration;
  console.log(`Countdown started: ${timeLeft} seconds`);

  const countdownTimerId = setInterval(function () {
    timeLeft--;
    console.log(`T-minus ${timeLeft} seconds`);

    if (timeLeft <= 0) {
      clearInterval(countdownTimerId);
      console.log("Liftoff! ");
    }
  }, 2365);
}
// TODO: Create a function named `startCountdown` that takes a duration parameter. Use `setInterval` to decrease the countdown every second and print the remaining time. Use `clearInterval` to stop the countdown when it reaches zero, printing a "Liftoff!" message.

// Task 7: Schedule Pre-Launch Activities and Launch
function scheduleMission() {
  startMonitoring(); // Starts monitoring space station conditions.
  addOneTimeTask(function () {
    console.log("Pre-launch system check complete.");
  }, 5000);
  addOneTimeTask(stopMonitoring, 10000); // Stops monitoring before the countdown.
  addOneTimeTask(function () {
    startCountdown(10);
  }, 15000); // Starts countdown after all preparations.

  runOneTimeTasks(); // Executes all scheduled one-time tasks.
}
// TODO: Use the functions you've created to schedule the pre-launch system check, start and stop monitoring, and execute the countdown. Make sure to adjust the delays appropriately to simulate a real mission timeline.

scheduleMission(); // Starts the mission.
