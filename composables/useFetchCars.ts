export default async (
  city: string,
  filters: {
    minPrice: string;
    maxPrice: string;
    make: string;
  }
): Promise<{
  data: Ref<Car[] | null>;
  refresh: (opts?: AsyncDataExecuteOptions) => Promise<void>;
}> => {
  // console.log('hit!!');

  const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: 'unable to fetch cars',
    });

    // return { data, refresh };
  }

  return { data, refresh };
};
