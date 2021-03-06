function delayCheck<T>(
  timeout: number,
  delay: number,
  checkFn: () => T,
  runFn?: Function,
  checkFirst = true
) {
  while (timeout > 0) {
    // eslint-disable-next-line no-param-reassign
    timeout -= delay;

    if (checkFirst && runFn) {
      runFn();
    }

    const result = checkFn();
    if (result) {
      return result;
    }

    if (!checkFirst && runFn) {
      runFn();
    }

    sleep(delay);
  }

  return false;
}

function delayRun(delay: number, runFn: Function, checkFn: () => boolean, retries = 3) {
  let left = retries;
  while (left > 0) {
    if (!checkFn()) {
      left -= 1;
      sleep(delay);
    } else {
      left = retries;
      runFn();
    }
  }
}

export { delayCheck, delayRun };
