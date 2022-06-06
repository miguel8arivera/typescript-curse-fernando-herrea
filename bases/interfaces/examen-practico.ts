// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Cualidades {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Cualidades = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Cualidades): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion

interface Gotica {
  (ciudadanos: string[]): number;
}

const ciudadGotica: Gotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface User {
  name: string;
  age: number;
  sex: string;
}

interface UserState {
  stateCivil: string;
  imprimirBio(): void;
}

class People implements User, UserState {
  constructor(
    public name: string,
    public age: number,
    public sex: string,
    public stateCivil: string
  ) {}

  imprimirBio(): void {
    console.log(` Hi I'm a dev the Software a player he life`);
  }
}

const persona1 = new People("Miguel", 26, "masculino", "Soltero");

persona1.imprimirBio;

console.log(persona1);

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona {}
