export function randomShuffle<T>(arr: T[]) {
  // Credit: https://stackoverflow.com/a/46545530/830623
  return arr
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}
