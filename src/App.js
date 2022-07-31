import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { useState } from "react";



function App() {

  const [idDeProductoSeleccionado, setidDeProductoSeleccionado] = useState(undefined);


  return (
    <div className="App">
      <NavBar />
      <h1 className="text-3xl font-bold underline">
        Heck Burgers
      </h1>
      <ItemListContainer contenedor='Lista contenedora' onClickVerMas={setidDeProductoSeleccionado} />
      <ItemDetailContainer idDeProductoSeleccionado={idDeProductoSeleccionado} />

      {/*<ItemDetailContainer/>*/}
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    </div>

  );
}

export default App;
