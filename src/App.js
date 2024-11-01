import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Creator from './components/Creator.jsx';
import Section from './components/Section.jsx';
import Preview from './components/Preview.jsx';
function App() {
  return (
    <>
      <Header/>
      <div className="m-12">
        
        <main className="flex justify-around flex-wrap min-h-screen">
            <Section component={ <Creator/> }/>
        
            <Section component={<Preview/>}/>
        </main>
      </div>

        <Footer/>
    </>
  );
}

export default App;
