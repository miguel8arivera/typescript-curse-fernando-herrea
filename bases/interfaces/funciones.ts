(() => {
  interface AdTwoNumber {
    (a: number, b: number): number;
  }

  let AddNumbersFunction: AdTwoNumber;

  AddNumbersFunction = (a: number, b: number) => {
    return 10;
  };
})();
