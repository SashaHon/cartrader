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
  interface Listing {
    id: number;
    name: string;
    make: string;
    model: string;
    price: string;
    year: number;
    city: string;
    url: string;
    seats: number;
    miles: string;
    features: string;
    description: string;
  }
}

export type { Car, Modal, Listing };
