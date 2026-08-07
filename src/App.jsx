import { Navigate, Route, Routes } from 'react-router-dom'
import Topbar from './components/Design/Topbar.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </>
  )
}

export default App
