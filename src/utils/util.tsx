export const getRowFromKey = (key: string): number => {
  // Extraemos la parte antes de la "/"
  const rowIndex = parseInt(key.split('/')[0].replace('input', ''));
  return rowIndex;
};