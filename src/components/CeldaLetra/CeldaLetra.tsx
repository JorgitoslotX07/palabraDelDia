import { FC, ReactElement } from 'react'
import './CeldaLetra.css';
import { repeticionModulo } from './../../utils/repeticionComponents'


interface LineaCeldaPalabraProps {
    numCeldas: number;
}

interface TotalLineasPalabrasProps {
    numCeldas: number;
    numLineas: number;
}
export const CeldaLetra:FC = ():ReactElement => {

  return (
    <div className='cell'>
        <input type="text" maxLength={1} />
    </div>
  )
}

export const LineaCeldaPalabra:FC<LineaCeldaPalabraProps> = ({numCeldas}):ReactElement => {

  return (
    <>
        {repeticionModulo(numCeldas, <CeldaLetra />)}
    </>
  )
}

export const TotalLineasPalabras:FC<TotalLineasPalabrasProps> = ({numCeldas, numLineas}):ReactElement => {

  return (
    <>
        {repeticionModulo(numLineas, <LineaCeldaPalabra numCeldas={numCeldas}/>)}
    </>
  )
}


