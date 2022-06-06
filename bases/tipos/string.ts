(() => {
  const batman: string = "Batman";
  const linternaVerde: any = "linterna's Verde";
  const volcanNegre: string = ` heroe: Volcan Negro`;

  console.log(` I'm ${batman}}`);
  console.log(linternaVerde);
  console.log(volcanNegre.toLocaleUpperCase());
  console.log(batman[10]?.toUpperCase() || "No esta presente");
})();
