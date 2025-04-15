import {FC, ReactElement} from 'react';
import {TotalLineasPalabrasProps} from '../../utils/TotalLineasPalabrasProps';
import { LineaCeldaPalabra } from '../LineaCeldaPalabra/LineaCeldaPalabra';

export const TotalLineasPalabras:FC<TotalLineasPalabrasProps> = ({inputs, onFocus, onChange, getLineaActual, setLineaActual, inputRefsArr}):ReactElement => {
  localStorage.setItem("LineaActual", "0")
  console.log(inputs, "inputs")
  return (
    <>
        {
          inputs.map((e, i) => (
            <LineaCeldaPalabra key={i} inputs={e} onFocus={onFocus} onChange={onChange} linea={i} getLineaActual={getLineaActual} setLineaActual={setLineaActual} inputRefsArr={inputRefsArr}/>
          ))
        }
    </>
  )
}