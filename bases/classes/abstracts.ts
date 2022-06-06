(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvorMundo() {
      return "Salvar el Mundo";
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return "Conquistar el mundo";
    }
  }

  const wolverine = new Xmen("wolverine", "Logan");
  const magneto = new Villian("magneto", "Erick");
  //   console.log(wolverine.salvorMundo());
  //   console.log(magneto.conquistarMundo());
  const printName = (character: Mutante) => {
    // console.log(character.name, character.realName);
  };
  printName(wolverine);
})();
