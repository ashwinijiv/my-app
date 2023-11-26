// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('secondary');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = (cls) => {
    //  To toggle switch between light and dark only 
    if (mode === 'secondary') {
      setMode('dark');
      document.body.style.backgroundColor = '#334e76'
      showAlert("Dark mode has been enabled", "success");
      // document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('secondary');
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success");
      // document.title = "TextUtils - Light Mode"
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} about="About us" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className='container my-3'>
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm heading="Modify your text below " mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;