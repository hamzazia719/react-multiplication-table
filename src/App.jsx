import './App.css'
import { useEffect, useState } from 'react';
import generateMultiplicationTable from './index'
function App() {
  const [tables, setTables] = useState('')
  useEffect(()=>{
    const table = generateMultiplicationTable(5)
    setTables(table)
  },[])
  
  
  return (
    <div>
      <h1>hello</h1>
      {tables}
    </div>
  )
}

export default App
