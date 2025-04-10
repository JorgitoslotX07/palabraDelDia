import { FC, ReactElement } from 'react'
import './Teclado.css'
import { repeticionModuloArrayString } from './../../utils/repeticionComponents'

interface FilaTecladoProps {
    letras: Array<string>;
    focusedInput: number | null;
    setInputValues: (value: string) => void;
}
interface TeclaProps {
    letra: string;
    focusedInput: number | null;
    setInputValues: (value: string) => void;    
}
    
export const Teclado:FC<{focusedInput: number | null, setInputValues: (value: string) => void}> = ({focusedInput, setInputValues}):ReactElement => {
    const fila1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const fila2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
    const fila3 = ['✓', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'];
  return (
    <div className='keyboard'>
        <FilaTeclado letras={fila1} focusedInput={focusedInput} setInputValues={setInputValues}/>
        <FilaTeclado letras={fila2} focusedInput={focusedInput} setInputValues={setInputValues}/>
        <FilaTeclado letras={fila3} focusedInput={focusedInput} setInputValues={setInputValues}/>
    </div>
  )
}

export const FilaTeclado:FC<FilaTecladoProps> = ({letras, focusedInput, setInputValues}):ReactElement => {
    return (
        <>
            <div className='keyboard-row'>
                {repeticionModuloArrayString(letras, Tecla, focusedInput, setInputValues)}
            </div>
        </>
    )
}

export const Tecla:FC<TeclaProps> = ({letra, focusedInput, setInputValues}):ReactElement => {
    function pulseKey() {
        console.log(focusedInput)
        setInputValues(letra)
    }

    return (
        <>
            <div onClick={pulseKey} className="key">{letra}</div>
        </>
    )
}
