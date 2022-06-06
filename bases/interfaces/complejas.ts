(() => {
  interface Client {
    name: String;
    age: number;
    adress: Address;
    getFullAddress(id: string): void;
  }

  interface Address {
    id: number;
    zip: number;
    city: string;
    hobby: Hobby;
  }

  interface Hobby {
    hobby1: string;
    hobby2: string;
  }

  const client: Client = {
    name: "Alissa",
    age: 25,
    adress: {
      id: 31212,
      zip: 23000,
      city: "Okinawa",
      hobby: {
        hobby1: "Cantar",
        hobby2: " Leer",
      },
    },

    getFullAddress(id: string) {
      return this.adress.city;
    },
  };
  const client1: Client = {
    name: "Alisson",
    age: 27,
    adress: {
      id: 312109,
      zip: 25000,
      city: "Lima",
      hobby: {
        hobby1: "Bailar",
        hobby2: " Correr",
      },
    },

    getFullAddress(id: string) {
      return this.adress.city;
    },
  };

  console.log(client);
})();
