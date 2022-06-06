(() => {
  let avenguer: any = 123;
  let exist;

  avenguer = "Doctor Strange";
  console.log(avenguer.charAt(0));
  console.log((avenguer as string).charAt(1));

  avenguer = 124.3435353636;
  console.log(avenguer.toFixed(2));
  console.log(<number>avenguer.toFixed(3));
  console.log(exist);

  /* const elements = [1, 2, 3, 4, 5];

  elements.forEach((element) => {
    console.log(element);

    if (element == 2) {
      return;
    }
  }); */
})();
