import { FC, ReactElement, useState } from 'react'
import { TotalLineasPalabras} from './components/CeldaLetra/CeldaLetra';
import {Teclado} from './components/Teclado/Teclado';
import './App.css'

export const App:FC = ():ReactElement => {
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [inputValues, setInputValues] = useState<string>("");


  const manejarFocus = (index: number) => {
    setFocusedInput(index);
    // console.log(index)
  };

  return (
    <>
      <div className='grid'>
        <TotalLineasPalabras numCeldas={5} numLineas={6} onFocus={manejarFocus} inputValue={inputValues} setInputValues={setInputValues}/>
        <Teclado focusedInput={focusedInput} setInputValues={setInputValues}/>
      </div>
    </>
  )
}
