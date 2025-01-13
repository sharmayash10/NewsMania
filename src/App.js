import './App.css';
import React from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News key="general" category="general"/>}></Route>

            <Route path="/entertainment" element={<News key="entertainment" category="entertainment"/>}></Route>

            <Route path="/sports" element={<News key="sports" category="sports"/>}></Route>

          </Routes>
        </div>
      </Router>
    )
}
export default App