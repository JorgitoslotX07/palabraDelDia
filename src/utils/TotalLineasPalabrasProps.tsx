import { InputsState } from "./InputsState";

export interface TotalLineasPalabrasProps {
    inputs: InputsState[];
    onFocus: (index: number) => void;
    onChange: (inputKey: string, newValue: string) => void;
}