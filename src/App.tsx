import { FC, ReactElement, useState } from 'react'
import {Teclado} from './components/Teclado/Teclado';
import './App.css'
import { TotalLineasPalabras } from './components/TotalLineasPalabras/TotalLineasPalabras';
import { InputsState } from './utils/InputsState';
import {getRowFromKey, getCelFromKey} from './utils/util';
import ErrorBoundary from './errors/ErrorBoundary';



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

  const [rowActual, setRowActual] = useState<number>(0); 
  const [inputs, setInputs] = useState<InputsState[]>(initialInputs);
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [activeInput, setActiveInput] = useState<string | null>("input0/0");
  // const [inputValues, setInputValues] = useState<string>("");
  function getRowActual() {
    return rowActual;
  }

  const inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>[] = [];

  const manejarFocus = (index: number) => {
    setFocusedInput(index);
    setActiveInput("input" + rowActual + "/" +  String(index))
  };

  const manejarFocusSupri = (index: number) => {
    if (index > 0) {
      inputRefs[rowActual].current[index - 1]?.focus();
    } else {
      inputRefs[rowActual].current[index]?.focus();
    }
  };




  const updateInputValue = (inputKey: string, newValue: string) => {
    const rowIndex:number = getRowFromKey(inputKey)
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs]; 
      const valueToSet = newValue === '⌫' ? '' : newValue;
      updatedInputs[rowIndex] = {
        ...updatedInputs[rowIndex], 
        [inputKey]: valueToSet, 
      };
      return updatedInputs; 
    });
  };

  const handleKeyPress = (key: string) => {
    if (!activeInput) return;
    // console.log(activeInput)
    // console.log(key)
    updateInputValue(activeInput, key)
    
    // else {
      manejarFocus(getCelFromKey(activeInput))
    // }

    if (key == "⌫") {
      manejarFocusSupri(getCelFromKey(activeInput))
    } 
  };

  return (
    <>
      <div className='grid'>
        <ErrorBoundary>
          <TotalLineasPalabras inputs={inputs} onFocus={manejarFocus} onChange={updateInputValue} getLineaActual={getRowActual} setLineaActual={setRowActual} inputRefsArr={inputRefs}/>
        </ErrorBoundary>
      </div>
          <Teclado focusedInput={focusedInput} onKeyPress={handleKeyPress}/>

    </>
  )
}
