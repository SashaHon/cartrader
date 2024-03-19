export const useUtilities = (): { toUpperCaseFirstLetter: Function } => {
  function toUpperCaseFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return { toUpperCaseFirstLetter };
};
