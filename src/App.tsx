import { FC, ReactElement, useState } from 'react'
import {Teclado} from './components/Teclado/Teclado';
import './App.css'
import { TotalLineasPalabras } from './components/TotalLineasPalabras/TotalLineasPalabras';
import { InputsState } from './utils/InputsState';
import {getRowFromKey, getCelFromKey, obtenerPalabraAleatoria} from './utils/util';
// import ErrorBoundary from './errors/ErrorBoundary';
import {SelectorDificultad} from './components/SelectorDificultad/SelectorDificultad';
import {SelectorTamanoPalabra} from './components/SelectorTamanoPalabra/SelectorTamanoPalabra';



export const App:FC = ():ReactElement => {
  const initialInputs: InputsState[] = []

  const [rowActual, setRowActual] = useState<number>(0); 
  const [dificultad, setDificultad] = useState<number>(6);
  const [numCeldas, setNumCeldas] = useState<number>(5); 

  const [inputs, setInputs] = useState<InputsState[]>(initialInputs);
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [activeInput, setActiveInput] = useState<string | null>("input0/0");
  if (!localStorage.getItem("palabra"))  {
    localStorage.setItem("palabra", obtenerPalabraAleatoria(numCeldas))
  }

  

  creacionInputs();

  function creacionInputs() {
    initialInputs.length = 0;

    for (let index = 0; index < dificultad; index++) {
      initialInputs.push(
        Array.from({ length: numCeldas }, (_, i) => [`input${index}/${i}`, '']).reduce(
            (acc, [key, value]) => ({ ...acc, [key]: value }),
          {}
        )
      )
    }

    console.log(inputs[0])
    if (inputs.length != initialInputs.length || Object.keys(inputs[0]).length != Object.keys(initialInputs[0]).length) {
      setInputs(initialInputs)
      localStorage.setItem("palabra", obtenerPalabraAleatoria(numCeldas))
    } 

  }

  function actualizarInpust(dif: number) {
    setDificultad(dif)
    creacionInputs()
  }

  function actualizarInpustCel(numCel: number) {
    setNumCeldas(numCel)
    creacionInputs()
  }

  
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
      <SelectorDificultad dif={dificultad} setDif={actualizarInpust}/>
      <SelectorTamanoPalabra numCel={numCeldas} setNumCel={actualizarInpustCel} />
      <div className='grid'>
          <TotalLineasPalabras inputs={inputs} onFocus={manejarFocus} onChange={updateInputValue} getLineaActual={getRowActual} setLineaActual={setRowActual} inputRefsArr={inputRefs}/>
      </div>
      <Teclado focusedInput={focusedInput} onKeyPress={handleKeyPress}/>

    </>
  )
}
