import { FC, ReactElement, useEffect, useRef } from 'react'
import './CeldaLetra.css';
import { CeldaLetraProps } from '../../utils/CeldaLetraProps';

export const CeldaLetra:FC<CeldaLetraProps> = ({ref, name, value, index, onChange, onBackspace, onFocus}):ReactElement => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        ref(inputRef.current);
    }, [ref]);

    function inputLetter(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value.toUpperCase();
        // Validar si es una sola letra A-Z o Ñ
        if (/^[A-ZÑ]$/.test(val)) {
            onChange(name,val, index);
        } else {
            // Borra el valor si no es válido
            onChange(name, "", index);
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
        <input ref={inputRef} key={name} value={value} type="text" maxLength={1} onChange={inputLetter} onKeyDown={deffLetter} onFocus={manejarFocus}/>
    </div>
  )
}