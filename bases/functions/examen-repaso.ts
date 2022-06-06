(() => {
  //!  Funciones Basicas:

  const sumar = (a: number, b: number): number => a + b;

  const contar = (heroes: string[]): number => {
    return heroes.length;
  };
  let superHeroes: string[] = ["Flash", "Arrow", "Superman", "Batman"];
  contar(superHeroes);

  //! Parametros por Defecto:

  const llamarBatman = (llamar: boolean = true): void => {
    if (llamar) {
      console.log("Batisenal active");
    }
  };

  llamarBatman();

  //! Parametros Rest:

  const unirHeroes = (...personas: string[]): string => {
    return personas.join(",");
  };
  unirHeroes("Alissa", "volma");

  //! Tipo funcion:

  const noHaceNada = (
    numero: number,
    texto: string,
    booleano: boolean,
    arreglo: string[]
  ) => {};

  //? Crear el tipo de funcion que acepte la funcion 'noHaceNada'

  let noHaceNadaTampoco: (
    n: number,
    s: string,
    b: boolean,
    a: string[]
  ) => void;

  noHaceNadaTampoco = noHaceNada;
})();
