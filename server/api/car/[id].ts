import cars from '@/data/cars.json';

export default defineEventHandler(
  (event: H3Event<EventHandlerRequest>): Car => {
    const carId: number = parseInt(event.context.params.id);
    const car = cars.find((car) => car.id === carId);

    if (!car) {
      throw createError({
        statusCode: 404,
        statusMessage: `Car with ID ${carId} does not exist`,
      });
    }
    return car;
  }
);
