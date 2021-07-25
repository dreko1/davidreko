import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import About from './components/About';

function App() {
  let about = false;
  
  return (
    <div>
      <Header about={about}/>
      <Content />
      <About />
    </div>
    
  );
}

export default App;
