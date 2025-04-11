import { FC, ReactElement } from 'react'
import './Teclado.css'
import { TecladoProps } from '../../utils/TecladoProps';
import { FilaTeclado } from '../FilaTeclado/FilaTeclado';


export const Teclado:FC<TecladoProps> = ({focusedInput, onKeyPress}):ReactElement => {
    const fila1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const fila2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
    const fila3 = ['✓', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'];
  return (
    <div className='keyboard'>
        <FilaTeclado letras={fila1} focusedInput={focusedInput} onKeyPress={onKeyPress}/>
        <FilaTeclado letras={fila2} focusedInput={focusedInput} onKeyPress={onKeyPress}/>
        <FilaTeclado letras={fila3} focusedInput={focusedInput} onKeyPress={onKeyPress}/>
    </div>
  )
}



