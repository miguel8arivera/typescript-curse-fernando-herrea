(() => {
  const name = "Miguel";
  const getName: Function = (): void => {
    console.log("Name old");
  };

  /*  getName = () => {
    console.log("Nuevo name");
  }; */
  getName();
})();
