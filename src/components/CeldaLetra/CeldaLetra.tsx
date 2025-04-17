import { FC, ReactElement, useEffect, useRef } from 'react'
import './CeldaLetra.css';
import { CeldaLetraProps } from '../../utils/CeldaLetraProps';

export const CeldaLetra:FC<CeldaLetraProps> = ({ref, name, value, index, onChange, onBackspace, onFocus, onEnter}):ReactElement => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    
    

    useEffect(() => {
        ref(inputRef.current);
    }, [ref]);

     useEffect(() => {
        veriValue(value)
    }, [value]);

    function veriValue(value: string) {
        const val = value.toUpperCase();
        if (/^[A-ZÑ]$/.test(val)) {
            onChange(name,val, index);
        } 
        // else if (val == "") {
        //     onBackspace(index);
        // }
        else {
            onChange(name, "", index);
        }
    }

    function inputLetter(e: React.ChangeEvent<HTMLInputElement>) {
        veriValue(e.target.value)
    }
        


    function deffLetter(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace" && !inputRef.current?.value) { 
            onBackspace(index);
        }else if (e.key === "Enter") { 
            onEnter();
        }
    }

    function manejarFocus() {
        // console.log(index)
        onFocus(index)
    }


  return (
    <div className='cell'>
        <input ref={inputRef} key={name} value={value} type="text" maxLength={1} onChange={inputLetter} onKeyDown={deffLetter} onFocus={manejarFocus}/>
    </div>
  )
}