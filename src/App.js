import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Card/ItemListContainer';
import ItemDetailContainer from './components/Card/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer tittle={'Lista de Productos'}/>   */}
      <ItemDetailContainer></ItemDetailContainer>
    </div>
  );
}

export default App;
