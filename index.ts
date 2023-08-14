import { Observable } from 'rxjs';

/*
  Increment value every 1s, emit even numbers.
*/

// https://www.learnrxjs.io/learn-rxjs/operators/creation/create

// Example 2: Observable that emits even numbers on timer
const evenNumbers = Observable.create(function (observer) {
  let value = 0;
  const interval = setInterval(() => {
    if (value % 2 === 0) {
      observer.next(value);
    }
    value++;
  }, 1000);

  return () => clearInterval(interval);
});
//output: 0...2...4...6...8
const subscribe = evenNumbers.subscribe((val) => console.log(val));
//unsubscribe after 10 seconds
setTimeout(() => {
  subscribe.unsubscribe();
}, 10000);
