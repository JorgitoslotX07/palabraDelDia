import {InputsState} from './InputsState';
export interface LineaCeldaPalabraProps {
    // numCeldas: number;
    // itera: number;
    inputs: InputsState
    onFocus: (index: number) => void;
    onChange: (inputKey: string, newValue: string) => void;
    linea: number;
    getLineaActual: () => number;
    setLineaActual: (num: number) => void;
    inputRefsArr: Array<React.MutableRefObject<(HTMLInputElement | null)[]>>;
}
