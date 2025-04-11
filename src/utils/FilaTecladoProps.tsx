export interface FilaTecladoProps {
    letras: Array<string>;
    focusedInput: number | null;
    onKeyPress: (key: string) => void;
}