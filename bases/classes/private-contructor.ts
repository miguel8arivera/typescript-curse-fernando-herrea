(() => {
  class Apocalipsis {
    static instance: Apocalipsis;
    private constructor(public name: string) {}
    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy apocalipsis el unico");
      }
      return Apocalipsis.instance;
    }

    changeName(newName: string) {
      this.name = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  console.log(apocalipsis);
  apocalipsis.changeName("Alissa");
  console.log(apocalipsis);
})();
