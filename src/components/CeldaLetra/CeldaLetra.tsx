import { FC, ReactElement, RefObject, useEffect, useRef } from 'react'
import './CeldaLetra.css';
import { repeticionModulo } from './../../utils/repeticionComponents'

interface CeldaLetraProps {
  index: number;
  onChange: (value: string, index: number) => void;
  onBackspace: (index: number) => void;
  autoFocus?: boolean;
  ref: RefObject<HTMLInputElement | null>;
  onFocus: (index: number) => void;
  inputValue: string;
  setInputValues: (value: string) => void;
}
interface LineaCeldaPalabraProps {
    numCeldas: number;
    itera: number;
    onFocus: (index: number) => void;
    inputValue: string;
    setInputValues: (value: string) => void;
}

interface TotalLineasPalabrasProps {
    numCeldas: number;
    numLineas: number;
    onFocus: (index: number) => void;
    inputValue: string;
    setInputValues: (value: string) => void;
}
export const CeldaLetra:FC<CeldaLetraProps> = ({ index, onChange, onBackspace, autoFocus = false, ref, onFocus, inputValue, setInputValues}):ReactElement => {
    // event captura letter
    // evento borrando
    // evento pasar al siguiente

    // const refs = useRef<(HTMLInputElement | null)[]>([]);
    useEffect(() => {
        if (autoFocus) {
            ref.current?.focus();
        }
    }, [autoFocus, ref]);

    function inputLetter(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value.toUpperCase();
        console.log(value)
        if (typeof value === 'string' && value.match(/^[A-ZÑ]$/)) {
            setInputValues(value);
            onChange(e.target.value, index);
        } else {
            e.target.value = "";
        }
    }

    function deffLetter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace" && !ref.current?.value) {
            onBackspace(index);
        }
    }

    function manejarFocus() {
        onFocus(index)
    }


  return (
    <div className='cell'>
        <input type="text" maxLength={1} onChange={inputLetter} onKeyDown={deffLetter} onFocus={manejarFocus} value={inputValue}/>
    </div>
  )
}

export const LineaCeldaPalabra:FC<LineaCeldaPalabraProps> = ({numCeldas, itera, onFocus, inputValue, setInputValues}):ReactElement => {
    const refs = useRef<(HTMLInputElement | null)[]>([]); 

    useEffect(() => {
        refs.current = Array(numCeldas).fill(null);
    }, [numCeldas]);

    const handleChange = (value: string, index: number) => {
        console.log(refs)
        if (index < numCeldas - 1) {
            refs.current[index + 1]?.focus();
        }
    };

    const handleBackspace = (index: number) => {
        if (index > 0) {
            refs.current[index - 1]?.focus();
        }
        
    };

    return (
        <>
            {[...Array(numCeldas)].map((_, i) => (
                <CeldaLetra
                    key={String(itera) + String((i + 1))}
                    index={i}
                    ref={{
                        current: refs.current[i],
                    }}
                    onChange={handleChange}
                    onBackspace={handleBackspace}
                    autoFocus={i === 0}
                    onFocus={onFocus}
                    inputValue={inputValue}
                    setInputValues={setInputValues}
                />
            ))}
        </>
    )
}

export const TotalLineasPalabras:FC<TotalLineasPalabrasProps> = ({numCeldas, numLineas, onFocus, inputValue, setInputValues}):ReactElement => {

  return (
    <>
        {repeticionModulo(numLineas, LineaCeldaPalabra, numCeldas, onFocus, inputValue, setInputValues)}
    </>
  )
}


