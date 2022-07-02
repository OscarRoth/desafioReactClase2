import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ItemListContainer from './componentes/ItemListContainer/Index';
//import ItemCounter from './componentes/ItemCounter/Index';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <NavBar/>
      {/*<ItemListContainer greeting = {"Sitio Web de Cerámica"}/>*/}
      {/*<ItemCounter value={1} stock={7} onAdd={(counter) => console.log(counter)} />*/}
      <ItemDetailContainer/>
  
    </div>    
  );
}

export default App;


