import { FC, JSX} from 'react';

export function repeticionModulo(num: number, Modulo: FC<{numCeldas: number; itera: number; onFocus: (index: number) => void;}>, numCeldas:number,  onFocus: (index: number) => void): JSX.Element[] {
    const arrNum: Array<number> = []
    for (let i = 0; i < num; i++) {
      arrNum.push(i)
    }

    return arrNum.map((i, index) => <Modulo key={index} numCeldas={numCeldas} itera={i} onFocus={onFocus} />);
}


export function repeticionModuloArrayString(
  arr: string[],
  Modulo: FC<{ letra: string, 
  focusedInput: number |null
  }>,
  focusedInput: number |null
): JSX.Element[] {
  return arr.map((letra, index) => <Modulo key={index} letra={letra} focusedInput={focusedInput} />);
}