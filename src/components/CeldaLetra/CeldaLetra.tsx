import { FC, ReactElement, useEffect, useRef } from 'react'
import './CeldaLetra.css';
import { repeticionModulo } from './../../utils/repeticionComponents'

interface CeldaLetraProps {
ref: (el: HTMLInputElement | null) => void;
  index: number;
  onChange: (index: number) => void;
  onBackspace: (index: number) => void;
  onFocus: (index: number) => void;
}
interface LineaCeldaPalabraProps {
    numCeldas: number;
    itera: number;
    onFocus: (index: number) => void;
}

interface TotalLineasPalabrasProps {
    numCeldas: number;
    numLineas: number;
    onFocus: (index: number) => void;
}
export const CeldaLetra:FC<CeldaLetraProps> = ({ref, index, onChange, onBackspace, onFocus}):ReactElement => {
    // event captura letter
    // evento borrando
    // evento pasar al siguiente

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        ref(inputRef.current);
    }, [ref]);

    function inputLetter(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.toUpperCase();
        if (typeof value === 'string' && value.match(/^[A-ZÑ]$/)) {
            onChange(index)
        } else {
            e.target.value = "";
        }
    }

    function deffLetter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace" && !inputRef.current?.value) { 
            onBackspace(index);
        }
    }

    function manejarFocus() {
        console.log(index)
        onFocus(index)
    }


  return (
    <div className='cell'>
        <input ref={inputRef} type="text" maxLength={1} onChange={inputLetter} onKeyDown={deffLetter} onFocus={manejarFocus}/>
    </div>
  )
}

export const LineaCeldaPalabra:FC<LineaCeldaPalabraProps> = ({numCeldas, itera, onFocus}):ReactElement => {
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);


    const handleChange = (index: number) => {
        if (index < numCeldas - 1) {
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
            {[...Array(numCeldas)].map((_, i) => (
                <CeldaLetra
                    ref={(el) => inputRefs.current[i] = el}
                    key={String(itera) + String((i + 1))}
                    index={i}
                    onChange={handleChange}
                    onBackspace={handleBackspace}
                    onFocus={onFocus}
                />
            ))}
        </>
    )
}

export const TotalLineasPalabras:FC<TotalLineasPalabrasProps> = ({numCeldas, numLineas, onFocus}):ReactElement => {

  return (
    <>
        {repeticionModulo(numLineas, LineaCeldaPalabra, numCeldas, onFocus)}
    </>
  )
}


