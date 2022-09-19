import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Paleta from './components/Paleta';
import ColorPicker from './components/ColorPicker';
import NombrePaleta from './components/NombrePaleta';
import Guardados from './components/Guardados';


function App() {
  
  
  return (
    <div className="App">
      <Header></Header>
      <ColorPicker/>
      <Guardados/>
    </div>
  );
}

export default App;
