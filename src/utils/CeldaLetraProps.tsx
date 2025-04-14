export interface CeldaLetraProps {
    ref: (el: HTMLInputElement | null) => void;
    name: string;
    value: string;
    index: number;
    onChange: (input: string, value: string, index: number) => void;
    onBackspace: (index: number) => void;
    onFocus: (index: number) => void;
    onEnter: () => void;

}
