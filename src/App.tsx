import { FC, ReactElement } from 'react'
import { TotalLineasPalabras} from './components/CeldaLetra/CeldaLetra';
import {Teclado} from './components/Teclado/Teclado';
import './App.css'

export const App:FC = ():ReactElement => {

  return (
    <>
      <div className='grid'>
        <TotalLineasPalabras numCeldas={5} numLineas={6} />
        <Teclado />
      </div>
    </>
  )
}
