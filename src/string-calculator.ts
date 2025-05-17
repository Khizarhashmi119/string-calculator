export function add(numbers: string): number {
  return numbers
    .replaceAll("\n", ",")
    .split(",")
    .map((value) => Number(value))
    .reduce((previousValue, currentValue) => previousValue + currentValue);
}
