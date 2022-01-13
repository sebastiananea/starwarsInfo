import Landing from './components/Landing'
import Characters from './components/Characters'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Characters />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
