import {FC, ReactElement} from 'react';
import { SelectorDificultadProps } from '../../utils/SelectorDificultadProps';

export const SelectorDificultad:FC<SelectorDificultadProps> = ({dif, setDif}):ReactElement => {
    const dificultades: string[] = ["Facil", "Normal", "Dificil"];
    const dificultadeNum: number[] = [9, 6, 3];

    function onChange(value: number) {
        setDif(value);
    };

    return (
        <>
            <select
                value={dif}
                onChange={(e) => onChange(Number(e.target.value))}
                className="border p-2 rounded"
                >
                {dificultades.map((option, index) => (
                    <option key={index} value={dificultadeNum[index]}>
                        {option}
                    </option>
                ))}
            </select>
        </>
    )
}