export const getRowFromKey = (key: string): number => {
  const rowIndex = parseInt(key.split('/')[0].replace('input', ''));
  return rowIndex;
};

export const getCelFromKey = (key: string): number => {
  // console.log(key)
  const rowIndex = parseInt(key.split('/')[1].replace('input', ''));
  // console.log(rowIndex)
  return rowIndex;
};

export const compararPalabra = (palabraElegida:string, palabraInputs: string): boolean => {
  if (!palabraElegida || !palabraInputs) return false;
  return palabraElegida.toUpperCase() ==  palabraInputs.toUpperCase();
};

