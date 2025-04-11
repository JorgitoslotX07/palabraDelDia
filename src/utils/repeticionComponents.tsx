import { FC, JSX } from "react";
// import { LineaCeldaPalabraProps } from "./LineaCeldaPalabraProps";
import { TeclaProps } from "./TeclaProps";
// import {InputsState} from './InputsState';

// export function repeticionModulo(
//   inputs: InputsState[],
//   Modulo: FC<LineaCeldaPalabraProps>,
//   onFocus: (index: number) => void
// ): JSX.Element[] {
//   const arrNum: Array<number> = [];
//   for (let i = 0; i < inputs.length; i++) {
//     arrNum.push(i);
//   }

//   return arrNum.map((i, index) => (
//     <Modulo key={index} numCeldas={inputs.length} itera={i} onFocus={onFocus} />
//   ));
// }

export function repeticionModuloArrayString(
  arr: string[],
  Modulo: FC<TeclaProps>,
  focusedInput: number | null, onKeyPress: (key: string) => void
): JSX.Element[] {
  return arr.map((letra, index) => (
    <Modulo key={index} letra={letra} focusedInput={focusedInput} onKeyPress={onKeyPress} />
  ));
}
