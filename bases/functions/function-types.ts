(() => {
  const addNumber = (a: number, b: number): number => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo esta salvado!`;

  //   let myFunction: (a:number, b:number)=>number;
  //   let myFunction: (name:string)=>string;
  let myFunction: () => void;

  //   myFunction =10;
  //   console.log(myFunction);
  /* myFunction = addNumber;
  console.log(myFunction(4, 3));

  myFunction = greet;
  console.log(myFunction ("Alissa")); */

  myFunction = saveTheWorld;
  console.log(myFunction());
})();
