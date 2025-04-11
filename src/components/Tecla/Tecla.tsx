import {FC, ReactElement} from 'react';
import { TeclaProps } from '../../utils/TeclaProps';

export const Tecla:FC<TeclaProps> = ({letra, focusedInput, onKeyPress}):ReactElement => {
    function pulseKey() {
        console.log(focusedInput)
    }

    return (
        <>
            <div onClick={() => onKeyPress(letra)} className="key">{letra}</div>
        </>
    )
}