export interface TeclaProps {
    letra: string;
    focusedInput: number | null;
    onKeyPress: (key: string) => void;
}