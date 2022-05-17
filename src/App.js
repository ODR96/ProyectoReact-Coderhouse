import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Card/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer tittle={'Lista de Productos'}/>
    </div>
  );
}

export default App;
