(() => {
  let batman: {
    name: string;
    age: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Bruce Wayn",
    age: 24,
    powers: ["Inteligencia", "Tiene super armas"],
  };
  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clark Kent",
    // age: 43,
    powers: ["Super Fuerza", "Super velicidad"],
  };

  /*  flash = {
    name: "Alissa",
    age: 24,
    powers: ["hablar"],
    getName() {
      return this.name;
    },
  };

  console.log(flash.getName()); */
})();
