import {InputsState} from './InputsState';
export interface LineaCeldaPalabraProps {
    // numCeldas: number;
    // itera: number;
    inputs: InputsState
    onFocus: (index: number) => void;
    onChange: (inputKey: string, newValue: string) => void;
}
