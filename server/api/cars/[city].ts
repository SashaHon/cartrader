import cars from '@/data/cars.json';

const isEqual = (param: string, val: string): boolean => {
  return param.toLocaleLowerCase() === val.toLocaleLowerCase();
};

export default defineEventHandler((event) => {
  const city: string | undefined = event.context.params?.city;
  const { make, minPrice, maxPrice } = getQuery(event);

  let filteredCars = cars;

  filteredCars = cars.filter((car) => isEqual(car.city, city as string));

  if (make) {
    filteredCars = filteredCars.filter((car) =>
      isEqual(car.make, make as string)
    );
  }

  if (typeof minPrice === 'string') {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= parseInt(minPrice);
    });
  }
  if (typeof maxPrice === 'string') {
    filteredCars = filteredCars.filter(
      (car) => car.price <= parseInt(maxPrice)
    );
  }

  return filteredCars;
});
