(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  };

  let myCustomVariable: String | number | Hero = "Innia";
  console.log(typeof myCustomVariable);

  myCustomVariable = 20;
  console.log(typeof myCustomVariable);

  myCustomVariable = {
    name: "Inna",
    age: 23,
    powers: [2],
  };
  console.log(typeof myCustomVariable);
})();
