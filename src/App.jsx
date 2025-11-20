import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home.jsx'
import SingleProperty from './pages/SingleProperty.jsx'

import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'



  function App() {
      
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<SingleProperty />} />    
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>



      </BrowserRouter>
      
    </div>
  )
}

export default App
