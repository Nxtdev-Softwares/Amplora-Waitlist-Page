import { HashRouter as Router, Routes, Route } from "react-router-dom"
import WaitlistPage from './pages/WaitlistPage.jsx'
import SuccessPage from './pages/SuccessPage.jsx'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WaitlistPage/>}></Route>
        <Route path="/SuccessPage" element={<SuccessPage/>}></Route>
      </Routes>
    </Router>
  )
}

export default App;

