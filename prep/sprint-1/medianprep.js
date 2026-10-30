export function calculateMedian(list) {
  // Checking for a non-array (including no argument at all)
  if (!Array.isArray(list)) {
    throw new Error("calculateMedian requires an array of numbers");
  }
  // Checking for an empty array
  if (list.length === 0) {
    throw new Error("calculateMedian requires a non-empty array");
  }
  // Checking for non-number items in the array
  for (const item of list) {
    if (typeof item !== "number") {
      throw new Error("calculateMedian requires an array of numbers");
    }
  }
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
  return list[middleIndex];
}