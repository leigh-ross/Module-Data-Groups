export function calculateMean(list) {
    let sum = 0;
    for (i = 0; i < list.length; i++) {
        sum += list[i];
    }
    const mean = sum / list.length;
    return mean;
};
