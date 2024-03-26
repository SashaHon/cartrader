export default async (
  id: string
): Promise<{
  data: Ref<Car | null>;
}> => {
  const { data, error } = await useFetch(`/api/car/${id}`);

  if (error.value) {
    throw createError({
      ...error.value,
      //   statusCode: error.value.statusCode,
      //   statusMessage: error.value.statusMessage,
    });
  }

  return { data };
};
