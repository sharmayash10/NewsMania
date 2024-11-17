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

  const apiKey = process.env.REACT_APP_API_KEY;
    return (
      <Router>
        <div>
          <Navbar/>
          <Routes>
            <Route path="/" element={<News apiKey={apiKey} key="general" category="general"/>}></Route>

            <Route path="/entertainment" element={<News apiKey={apiKey} key="entertainment" category="entertainment"/>}></Route>

            <Route path="/sports" element={<News apiKey={apiKey} key="sports" category="sports"/>}></Route>

          </Routes>
        </div>
      </Router>
    )
}
export default App