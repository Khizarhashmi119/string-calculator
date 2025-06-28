export function add(numbers: string): number {
  if (numbers.startsWith("//")) {
    const indexOfFirstNewline = numbers.indexOf("\n");
    const delimiter = numbers.slice(2, indexOfFirstNewline);
    numbers = numbers.slice(indexOfFirstNewline + 1).replaceAll(delimiter, ",");
  }

  const letters: string[] = [];

  numbers
    .replaceAll("\n", ",")
    .split(",")
    .forEach((value) => {
      if (isNaN(Number(value))) letters.push(value);
    });

  if (letters.length) throw `${letters.join(",")} is not allowed.`;

  const numberList = numbers
    .replaceAll("\n", ",")
    .split(",")
    .map((value) => Number(value));

  const negativeNumbers: number[] = [];

  numberList.forEach((value) => {
    if (value < 0) negativeNumbers.push(value);
  });

  if (negativeNumbers.length)
    throw `negative numbers not allowed ${negativeNumbers.join(", ")}`;

  return numberList.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );
}
