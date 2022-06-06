(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    active: boolean;
    power: number;
  };
  const avenger: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    active: true,
    power: 1500,
  };

  //   const { power, vision } = avenger;
  //   console.log(power.toFixed(3), vision.toUpperCase());

  const printAvenger = ({ ironman, ...rest }: Avengers) => {
    console.log(ironman, rest);
  };
  //   printAvenger(avenger);

  //? Desesetructuring arr

  const avengerArr: [string, boolean, number] = ["Cap. America", false, 28];
  //   const ironman = avengerArr[1]; FORMA Antigua
  const [capitan, ironman, seriaUnNumero] = avengerArr;
  console.log({ ironman, capitan, seriaUnNumero });
})();
