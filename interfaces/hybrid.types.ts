interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  const counter = (function (start: number) {}) as Counter;
  counter.interval = 100;
  counter.reset = function () {};
  return counter;
}

const counter = getCounter();
counter(10);
counter.reset();
counter.interval = 5.0;


interface AlarmClock {
  (time: number): void,
  time: Date,
}

function createAlarmClock(time: number): AlarmClock {
  const alarm = (function(time) {}) as AlarmClock;
  alarm.time = new Date();
  return alarm
}
