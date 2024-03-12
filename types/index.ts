declare global {
  interface Car {
    id: number;
    name: string;
    price: number;
    url: string;
    seats: number;
    miles: number;
    features: Array<string>;
    description: string;
  }
  interface Modal {
    location: boolean;
    make: boolean;
    price: boolean;
  }
}

export type { Car, Modal };
