export const getRowFromKey = (key: string): number => {
  const rowIndex = parseInt(key.split('/')[0].replace('input', ''));
  return rowIndex;
};

export const getCelFromKey = (key: string): number => {
  const rowIndex = parseInt(key.split('/')[1].replace('input', ''));
  return rowIndex;
};