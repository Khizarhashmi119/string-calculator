export function add(numbers: string): number {
  if (numbers.startsWith("//")) {
    const indexOfFirstNewline = numbers.indexOf("\n");
    const delimiter = numbers.slice(2, indexOfFirstNewline);

    return numbers
      .slice(indexOfFirstNewline + 1)
      .replaceAll(delimiter, ",")
      .replaceAll("\n", ",")
      .split(",")
      .map((value) => Number(value))
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  return numbers
    .replaceAll("\n", ",")
    .split(",")
    .map((value) => Number(value))
    .reduce((previousValue, currentValue) => previousValue + currentValue);
}
