(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      //   console.log("Constructor Avenger llanado!");
    }

    protected getFullName(): string {
      return `${this.name} => (${this.realName})`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMuted: boolean) {
      super(name, realName);
      //   console.log("Contructor Xmen llamado");
    }

    get fullName() {
      return `${this.name} - (${this.realName})`;
    }

    set fullName(name: string) {
      if (name.length < 5) {
        throw new Error("El nombre debe ser mayor a 5 letras");
      }
      this.name = name;
    }
    getFullNameDesdeXmen() {
      //   console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("wolverine", "Logan", true);
  //   wolverine.fullName = "Alisisa";
  //   console.log(wolverine.fullName);
  //   wolverine.getFullNameDesdeXmen();
})();
