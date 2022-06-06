(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let batman: Hero = {
    name: "Bruce Wayn",
    age: 24,
    powers: [2, 3],
  };
  let superman: Hero = {
    name: "Clark Kent",
    age: 43,
    powers: [3, 4],
    getName() {
      return this.name;
    },
  };
})();
