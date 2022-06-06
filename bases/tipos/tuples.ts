(() => {
  const heroes: [string, number, boolean] = ["Dr Strange", 100, true];

  heroes[0] = "Iron man";
  heroes[1] = 50;
  heroes[2] = false;
  console.log(heroes);
})();
