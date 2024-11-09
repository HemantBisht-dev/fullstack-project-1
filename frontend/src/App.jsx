import './App.css'
import {Routes,Route} from 'react-router-dom'

import Navbar from './components/navbar'
import HomePage from './Pages/homePage'
import CreatePage from './Pages/createPage'

function App() {

  return (
    <div className='min-h-screen bg-gray-800'>
    <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
        <Route path='/update/:id' element={<CreatePage/>}/>
      </Routes>
    </div>
  )
}

export default App
