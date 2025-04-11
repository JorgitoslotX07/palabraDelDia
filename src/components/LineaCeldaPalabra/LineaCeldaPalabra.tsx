import {FC, ReactElement, useRef} from 'react';
import {CeldaLetra} from '../CeldaLetra/CeldaLetra';
import { LineaCeldaPalabraProps } from '../../utils/LineaCeldaPalabraProps';

export const LineaCeldaPalabra:FC<LineaCeldaPalabraProps> = ({inputs, onFocus, onChange}):ReactElement => {
    const numCeldas: number = Object.keys(inputs).length
    
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const handleChange = (input: string, value: string, index: number) => {
        onChange(input, value)
        if (value != "" && index < numCeldas - 1) {
            inputRefs.current[index + 1]?.focus();
            onFocus(index + 1);
        }
    };

    const handleBackspace = (index: number) => {
        if (index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
        
    };

    return (
        <>
            {
                Object.entries(inputs).map(([name, value], i) => (
                    <CeldaLetra
                        key={name}
                        name={name}
                        ref={(el) => (inputRefs.current[i] = el)}
                        value={value}
                        index={i}
                        onChange={handleChange}
                        onBackspace={handleBackspace}
                        onFocus={onFocus}
                    />
                ))
            }
        </>
    )
}
