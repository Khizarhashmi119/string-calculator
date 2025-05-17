export function add(numbers: string): number {
  return numbers
    .split(",")
    .map((value) => Number(value))
    .reduce((previousValue, currentValue) => previousValue + currentValue);
}
