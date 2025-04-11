import {FC, ReactElement} from 'react';
import {TotalLineasPalabrasProps} from '../../utils/TotalLineasPalabrasProps';
import { LineaCeldaPalabra } from '../LineaCeldaPalabra/LineaCeldaPalabra';

export const TotalLineasPalabras:FC<TotalLineasPalabrasProps> = ({inputs, onFocus, onChange}):ReactElement => {

  return (
    <>
        {
          inputs.map((e, i) => (
            <LineaCeldaPalabra key={i} inputs={e} onFocus={onFocus} onChange={onChange}/>
          ))
        }
    </>
  )
}