import { InputsState } from "./InputsState";

export interface TotalLineasPalabrasProps {
    inputs: InputsState[];
    onFocus: (index: number) => void;
    onChange: (inputKey: string, newValue: string) => void;
    getLineaActual: () => number;
    setLineaActual: (num: number) => void;
    inputRefsArr: React.MutableRefObject<(HTMLInputElement | null)[]>[];
}