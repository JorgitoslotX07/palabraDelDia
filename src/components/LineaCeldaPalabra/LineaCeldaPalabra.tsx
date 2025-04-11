import {FC, ReactElement, useRef} from 'react';
import {CeldaLetra} from '../CeldaLetra/CeldaLetra';
import { LineaCeldaPalabraProps } from '../../utils/LineaCeldaPalabraProps';

export const LineaCeldaPalabra:FC<LineaCeldaPalabraProps> = ({inputs, onFocus, onChange}):ReactElement => {
    const numCeldas: number = Object.keys(inputs).length
    
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
    const handleChange = (input: string, value: string, index: number) => {

        onChange(input, value)
        console.log(inputs[index])

        if (index < numCeldas - 1) {
            inputRefs.current[index + 1]?.focus();
            // console.log(inputRefs.current)
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
            {/* {[...Array(numCeldas)].map((_, i) => (
                <CeldaLetra
                    ref={(el) => inputRefs.current[i] = el}
                    key={String(itera) + String((i + 1))}
                    index={i}
                    onChange={handleChange}
                    onBackspace={handleBackspace}
                    onFocus={onFocus}
                />
            ))} */
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
