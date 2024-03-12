export { Car };

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
}
