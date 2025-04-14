import {FC, ReactElement, useRef} from 'react';
import {CeldaLetra} from '../CeldaLetra/CeldaLetra';
import { LineaCeldaPalabraProps } from '../../utils/LineaCeldaPalabraProps';
import {compararPalabra} from '../../utils/util';

export const LineaCeldaPalabra:FC<LineaCeldaPalabraProps> = ({inputs, onFocus, onChange, linea, getLineaActual, setLineaActual, inputRefsArr}):ReactElement => {
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

    const pressEnter = (): void => {
        const listClases: string[] = ["verde", "amarillo", "gris"]
        const palabra:string = "PERRO";
        const palabraDivida:string[] = palabra.split("");
        let palabraInputs = "";

        Object.entries(inputs).map(([, value], i) => {
            palabraInputs += value;
            if (value === palabraDivida[i]) {
                inputRefs.current[i]?.classList.add(listClases[0])
            } else if (palabraDivida.includes(value)) {
                inputRefs.current[i]?.classList.add(listClases[1])
            } else {
                inputRefs.current[i]?.classList.add(listClases[2])
            }

            if (inputRefs.current[i]) {
                inputRefs.current[i]!.disabled = true;
                inputRefs.current[i]!.classList.add("cellDisabled")
            }
        })

        setLineaActual(linea + 1)

        if (compararPalabra(palabra, palabraInputs)) {
            alert("Ganaste! NO VA EL PUTO WIFIII :(")
        } else {
            alert("Perdiste! NO VA EL PUTO WIFIII :(")
        }
    };


    if (linea == getLineaActual()) {
        inputRefs.current.forEach(e => {
            e!.disabled = false
        });
    } else {
        inputRefs.current.forEach(e => {
            e!.disabled = true
        });
    }

    function anadirInputArr() {
        inputRefsArr.push(inputRefs)
    }

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
                        onEnter={pressEnter}
                    />
                ))
            }

            {
                linea == inputRefsArr.length && anadirInputArr()
            }
        </>
    )
}
