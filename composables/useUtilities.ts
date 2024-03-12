export const useUtilities = () => {
  function toUpperCaseFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return { toUpperCaseFirstLetter };
};
