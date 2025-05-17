export function add(numbers: string): number {
  if (numbers.startsWith("//")) {
    const indexOfFirstNewline = numbers.indexOf("\n");
    const delimiter = numbers.slice(2, indexOfFirstNewline);

    const number_list = numbers
      .slice(indexOfFirstNewline + 1)
      .replaceAll(delimiter, ",")
      .replaceAll("\n", ",")
      .split(",")
      .map((value) => Number(value));

    const negativeNumbers: number[] = [];

    number_list.forEach((value) => {
      if (value < 0) {
        negativeNumbers.push(value);
      }
    });

    if (negativeNumbers.length) {
      throw `negative numbers not allowed ${negativeNumbers.join(", ")}`;
    }

    return number_list.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
    );
  }

  const number_list = numbers
    .replaceAll("\n", ",")
    .split(",")
    .map((value) => Number(value));

  const negativeNumbers: number[] = [];

  number_list.forEach((value) => {
    if (value < 0) {
      negativeNumbers.push(value);
    }
  });

  if (negativeNumbers.length) {
    throw `negative numbers not allowed ${negativeNumbers.join(", ")}`;
  }

  return number_list.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
  );
}
