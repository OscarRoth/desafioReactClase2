import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer/Index';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = {"Sitio Web de Cerámica"}/>
    </div>    
  );
}

export default App;
