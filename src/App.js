import './App.css';
import About from './components/About.js';
import Header from './components/Header.js';
import Introduction from './components/Introduction.js';

function App() {
  return (
    <div className='app_content'>
      <Header/>
      <Introduction/>
      <About/>
    </div>
  );
}

export default App;
