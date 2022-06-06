(() => {
  // Tipos
  const batman: string = "Bruce";
  const superman: string = "Clark";

  const existe: boolean = false;

  // Tuplas
  const parejaHeroes: [string, string] = [batman, superman];
  const villano: [string, number, boolean] = ["Lex Lutor", 5, true];

  // Arreglos
  const aliados: string[] = ["Mujer Maravilla", "Acuaman", "San", "Flash"];

  //Enumeraciones
  enum strongLevel {
    acuamam = 0,
    batman = 1,
    flash = 5,
    superman = 100,
  }
  const fuerzaFlash: strongLevel = strongLevel.flash;
  const fuerzaSuperman: strongLevel = strongLevel.superman;
  const fuerzaBatman: strongLevel = strongLevel.batman;
  const fuerzaAcuaman: strongLevel = strongLevel.acuamam;

  // Retorno de funciones
  function activar_batiseñal(): string {
    return "activada";
  }

  function pedir_ayuda(): void {
    console.log("Auxilio!!!");
  }

  // Aserciones de Tipo
  const poder: any = "100";
  const largoDelPoder: number = (poder as String).length;
  console.log(largoDelPoder);
})();
