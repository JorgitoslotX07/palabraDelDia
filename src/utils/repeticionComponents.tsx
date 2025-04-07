import {FC, JSX, ReactElement} from 'react';

export function repeticionModulo(num:number, modulo: ReactElement): JSX.Element[] {
     const acumCeldas: JSX.Element[] = [];

    for (let i = 0; i < num; i++) {
        acumCeldas.push(modulo);
    }

    return acumCeldas;
}

export function repeticionModuloArrayString(
  arr: string[],
  Modulo: FC<{ letra: string }>
): JSX.Element[] {
  return arr.map((letra, index) => <Modulo key={index} letra={letra} />);
}