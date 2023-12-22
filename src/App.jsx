import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Componets/Header/Header'
import ProductList from './Componets/ProductList/ProductList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <ProductList/>
    </>
  )
}

export default App
