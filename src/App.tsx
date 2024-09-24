import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Guest from './components/Guest'
import Profile from './components/Profile'

function App() {
  const token = 'osiadoi';

  return (
    <Routes>
      <Route path='/' element={token ? <Navigate to='/profile' /> : <Guest/>}/>
      <Route path='/profile' element={token ? <Profile/> : <Navigate to='/' />}/>
    </Routes>
  )
}

export default App
