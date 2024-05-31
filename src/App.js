import './App.css';
import Res from "./Res"
import { useRef, useState } from 'react';

export default function App() {
  const [start, setStart] = useState(false)
  const calculate = () => setStart(true)

  const x = useRef(null)
  const y = useRef(null)
  const operation = useRef(null)

  return (
    <>
      <main>
        <div className='qwe'>
          <input ref={x} type="number" placeholder='first number'></input>
          <select ref={operation}>
            <option value="plus">+</option>
            <option value="minus">-</option>
            <option value="divide">/</option>
            <option value="multiply">*</option>
            <option value="degree">^</option>
          </select>
          <input ref={y} type="number" placeholder='second number'></input>
        </div>
        <button onClick={calculate}>calculate</button>
        {start && <Res x={Number(x.current.value)} y={Number(y.current.value)} operation={operation.current.value}/>}
      </main>
    </> 
  );
}
