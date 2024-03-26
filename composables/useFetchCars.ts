export default async (
  city: string,
  filters: {
    minPrice: string;
    maxPrice: string;
    make: string;
  }
): Promise<{
  data: Ref<Car[] | null>;
}> => {
  const { data, error } = await useFetch(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: 'unable to fetch cars',
    });
  }

  return { data };
};
