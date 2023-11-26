// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },2000);
  }

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (cls === 'light'){
      setMode('light')
    }
    if (cls === 'dark'){
      setMode('dark')
    }
    //  To toggle switch between light and dark only 
    // if (mode === 'light'){
    //   setMode('dark');
    //   document.body.style.backgroundColor = '#334e76'
    //   showAlert("Dark mode has been enabled", "success");
    // }
    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white'
    //   showAlert("Light mode has been enabled", "success");
    // }
  }
    

  return (
    <>
    {/* <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/> */}
    <Navbar title="TextUtils" about="About us" toggleMode={toggleMode}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className='container'>
    <TextForm heading="Enter text here to analyze" mode={mode} showAlert={showAlert}/>
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;




