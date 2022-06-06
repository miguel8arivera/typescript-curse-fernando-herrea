(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: "Tony Stark",
    weapon: " Armorsuit",
  };

  const capitanAmerica: Avenger = {
    name: "Steve Rojer",
    weapon: " Shield",
  };
  const thor: Avenger = {
    name: "Thor",
    weapon: " Mjolnir",
  };

  const avengers: Avenger[] = [ironman, thor, capitanAmerica];

  for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
  }
})();
