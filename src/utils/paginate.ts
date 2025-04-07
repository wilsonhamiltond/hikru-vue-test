const paginate = <T>(array: T[], page: number, size: number): T[] => {
  const startIndex = (page - 1) * size;
  const endIndex = startIndex + size;
  return array.slice(startIndex, endIndex);
};

export default paginate;
