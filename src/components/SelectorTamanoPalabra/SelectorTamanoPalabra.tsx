import {FC, ReactElement} from 'react';
import { SelectorTamanoPalabraProps } from '../../utils/SelectorTamanoPalabraProps';

export const SelectorTamanoPalabra:FC<SelectorTamanoPalabraProps> = ({numCel, setNumCel}):ReactElement => {
    const numCelMax: number = 9;
    const numCelMin: number = 3

    function onChange(value: number) {
        setNumCel(value);
    };

    return (
        <>
            <select
                value={numCel}
                onChange={(e) => onChange(Number(e.target.value))}
                className="border p-2 rounded"
                >
                {Array.from({ length: numCelMax - numCelMin }, (_, i) => {
                    const value = numCelMin + i;
                    return (
                    <option key={value} value={value}>
                        {value}
                    </option>
                    );
                })}
            </select>
        </>
    )
}