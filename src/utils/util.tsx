import palabras from "../assets/diccionario.json";

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

type PalabrasPorLongitud = {
  [longitud: string]: string[];
};

export function obtenerPalabraAleatoria(
  longitud: number | string
): string {
  const datos: PalabrasPorLongitud = palabras

  const key = String(longitud);
  const grupo = datos[key];

  if (!grupo || grupo.length === 0) {
    console.warn(`No hay palabras con longitud ${key}`);
    return "";
  }

  const indice = Math.floor(Math.random() * grupo.length);
  return grupo[indice];
}