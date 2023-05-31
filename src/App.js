import { useState } from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { Routes } from './Components/Routes';
import { Footer } from './Components/Footer';

function App() {

  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen '>
        <Navbar dark={dark} setDark={setDark}/>        
        <Routes/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
