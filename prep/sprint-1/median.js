function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  if (list.length % 2 === 0) {
    // Even length: average the two middle values
    return (list[middleIndex - 1] + list[middleIndex]) / 2;
  }
  // Odd length: there's a single middle value
  return list[middleIndex];
}