import {FC, ReactElement} from 'react';
import {repeticionModuloArrayString} from '../../utils/repeticionComponents';
import { FilaTecladoProps } from '../../utils/FilaTecladoProps';
import { Tecla } from '../Tecla/Tecla';

export const FilaTeclado:FC<FilaTecladoProps> = ({letras, focusedInput, onKeyPress}):ReactElement => {
    return (
        <>
            <div className='keyboard-row'>
                {repeticionModuloArrayString(letras, Tecla, focusedInput, onKeyPress)}
            </div>
        </>
    )
}