import { FC, ReactElement, useState } from 'react'
import {Teclado} from './components/Teclado/Teclado';
import './App.css'
import { TotalLineasPalabras } from './components/TotalLineasPalabras/TotalLineasPalabras';
import { InputsState } from './utils/InputsState';
import {getRowFromKey} from './utils/util';



export const App:FC = ():ReactElement => {
  const initialInputs: InputsState[] = []

  for (let index = 0; index < 6; index++) {
    initialInputs.push(
      Array.from({ length: 5 }, (_, i) => [`input${index}/${i}`, '']).reduce(
          (acc, [key, value]) => ({ ...acc, [key]: value }),
        {}
      )
    )
  }


  const [inputs, setInputs] = useState<InputsState[]>(initialInputs);
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [activeInput, setActiveInput] = useState<string | null>("input0/0");
  // const [inputValues, setInputValues] = useState<string>("");


  const manejarFocus = (index: number) => {
    setFocusedInput(index);
    setActiveInput("input0/" +  String(index))
    // console.log(index)
  };

  const updateInputValue = (inputKey: string, newValue: string) => {
    const rowIndex:number = getRowFromKey(inputKey)
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs]; 
      updatedInputs[rowIndex] = {
        ...updatedInputs[rowIndex], 
        [inputKey]: newValue, 
      };
      return updatedInputs; 
    });
  };

  const handleKeyPress = (key: string) => {
    if (!activeInput) return;

    setInputs((prev) => {
      const current = prev[activeInput]; // Aquí ahora accedemos al valor correctamente
      return {
        ...prev,
        [activeInput]: key === '⌫' ? current.slice(0, -1) : current + key,
      };
    });
  };

  return (
    <>
      <div className='grid'>
        <TotalLineasPalabras inputs={inputs} onFocus={manejarFocus} onChange={updateInputValue}/>
        <Teclado focusedInput={focusedInput} onKeyPress={handleKeyPress}/>
      </div>
    </>
  )
}
