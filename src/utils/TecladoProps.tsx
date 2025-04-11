export interface TecladoProps {
    focusedInput: number | null;
    onKeyPress: (key: string) => void;
}