/* Based on Jest documentation: https://jestjs.io/docs/en/timer-mocks */
'use strict';

const { countdown } = require('./clock');
const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");

// Jest can fake the passage of time for javascript timers
jest.useFakeTimers();

/**
 * Countdown to be defined
 */

test('Countdown function exists', countdownExistsTest);

function countdownExistsTest(){
  expect(countdown).toBeDefined();
}

/**
 * Countdown to delay execution of callback by 2000 millis
 */

test('tests delay of countdown calls by 2 seconds', countdownDelayTest);

function countdownDelayTest() {
  const t = 2000;
  const callback = jest.fn();

  countdown(t, callback);

  // At this point in time, the callback should not have been called yet
  expect(callback).not.toBeCalled();

  // Fast-forward until all timers have been executed
   jest.advanceTimersByTime(t);

  // Now our callback should have been called!
  expect(callback).toBeCalled();
  expect(callback).toHaveBeenCalledTimes(1);

}
