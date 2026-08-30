import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Createpost from './pages/Createpost'
import Feed from './pages/Feed'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/post' element={<Createpost />} />
      </Routes>
    </Router>
  )
}

export default App