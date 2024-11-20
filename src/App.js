import './App.css';
import { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Creator from './components/Creator.jsx';
import Section from './components/Section.jsx';
import Preview from './components/Preview.jsx';

function App() {
  const [sharedData, setSharedData] = useState([]);

  return (
    <>
      <Header/>
      <div className="m-12">
        
        <main className="flex justify-around landscape:flex-row portrait:flex-col portrait:justify-evenly flex-wrap min-h-screen">
            <Section component={ <Creator sharedData={sharedData} setSharedData={setSharedData}/> }/>
        
            <Section component={ <Preview sharedData={sharedData}/> }/>
        </main>
      </div>

        <Footer/>
    </>
  );
}

export default App;
