import {calculateMedian} from "./median.js";

test("calculates the median of a list of odd length", () => {
  const list = [10, 20, 30, 50, 60];
  const currentOutput = calculateMedian(list);
  const targetOutput = 30;

  expect(currentOutput).toEqual(targetOutput);
});

test("calculates the median of a list of even length", () => {
  const list = [10, 20, 30, 50, 60, 70];
  const currentOutput = calculateMedian(list);
  const targetOutput = 40;

  expect(currentOutput).toEqual(targetOutput);
});
