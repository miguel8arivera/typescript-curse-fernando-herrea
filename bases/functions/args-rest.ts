(() => {
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(" ")}`;
  };

  const superman = fullName("Klark", "Joseph", "Kent", "Urazova");

  console.log({ superman });
})();
