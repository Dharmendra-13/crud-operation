import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import User from './User'
import Create from './Create'
import Update from './Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<User />} />
      <Route path='create' element={<Create />} />
      <Route path='update/:id' element={<Update />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
