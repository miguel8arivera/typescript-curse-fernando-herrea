(() => {
  class Avengers {
    //! Forma larga de crear clases
    /*  private name: string = "Alissa";
    public team: string;
    public realName?: string;
    static avgAge: number = 25;

    constructor(name: string, team: string, realName?: string) {
      (this.name = name), (this.team = team), (this.realName = realName);
    }
  }

  const girl1: Avengers = new Avengers("Alisson", "Urasoz");
  console.log(girl1); */

    //   console.log(Avengers.avgAge);

    //? Forma corta de crear clases
    static avgAge: number = 25;
    static getName(): string {
      return this.name;
    }
    constructor(
      private name: string,
      public team: string,
      public realName?: string //   avgAge: number = 45
    ) {
      //   Avengers.avgAge = avgAge;
    }

    public bio() {
      return `${this.name} => (${this.team})`;
    }
  }

  /* const antman: Avengers = new Avengers("Antman", "capitan", "Scot Lang");
  console.log(antman);
  console.log(Avengers.avgAge);
  console.log(antman.bio());
  console.log(Avengers.getName()); */
})();
