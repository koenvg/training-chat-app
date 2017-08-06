export const selectRandomElementFromArray = <T>(array: Array<T>) => {
  return array[Math.floor(Math.random() * array.length)];
};
