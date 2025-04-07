import { FC, ReactElement } from 'react'
import './Teclado.css'
import { repeticionModuloArrayString } from './../../utils/repeticionComponents'

interface FilaTecladoProps {
    letras: Array<string>;
}
interface TeclaProps {
    letra: string;
}

export const Teclado:FC = ():ReactElement => {
    const fila1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const fila2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'];
    const fila3 = ['✓', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '⌫'];
  return (
    <div className='keyboard'>
        <FilaTeclado letras={fila1} />
        <FilaTeclado letras={fila2} />
        <FilaTeclado letras={fila3} />
    </div>
  )
}

export const FilaTeclado:FC<FilaTecladoProps> = ({letras}):ReactElement => {
    return (
        <>
            <div className='keyboard-row'>
                {repeticionModuloArrayString(letras, Tecla)}
            </div>
        </>
    )
}


export const Tecla:FC<TeclaProps> = ({letra}):ReactElement => {
    return (
        <>
            <div className="key">{letra}</div>
        </>
    )
}
