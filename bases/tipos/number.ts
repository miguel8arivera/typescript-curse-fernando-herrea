(() => {
  let avenguers: number = 10;
  console.log(avenguers);
  const villians: number = 20;
  if (avenguers < villians) {
    console.log("Estamos en problemas");
  } else {
    console.log("nos Salvamos");
  }

  avenguers = Number("43a");
  console.log(avenguers);
})();
