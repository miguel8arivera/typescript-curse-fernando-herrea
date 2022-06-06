(() => {
  class Avenger {
    name;
    power;

    constructor(name = "no name", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class flyAvenger extends Avenger {
    flying;
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 9001);
  const falcon = new flyAvenger("falcon", 50);
  console.log(hulk);
  console.log(falcon);
})();
