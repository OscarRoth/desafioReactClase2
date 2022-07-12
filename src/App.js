import NavBar from './componentes/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './componentes/ItemListContainer/Index';
//import ItemCounter from './componentes/ItemCounter/Index';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from  'react-router-dom';
import { NotFound } from './componentes/NotFound/Index';
import Cart from './componentes/Cart/Cart';
//import ShopProvider, { Shop } from './context/ShopContext';

function App() {
  //definimos las rutas con su caminito y en cada ruta colocamos el elemento que vamos a renderizar
  //la 2da ruta: en el path ubico la ruta y elment es el componente que renderizo
  //el 3er path va a ser mismo pero lo recibe de manera Dinámica, el Detail espera un parámetro, en este caso un id, o sea un número

  //clase 9 - se importa el componente cart y se routea

  return (
    
      <BrowserRouter>    
      <div>      
        <NavBar/>
        <Routes>        
          <Route path="/" element={<ItemListContainer/>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}></Route>
          <Route path="/detail/:productId" element={<ItemDetailContainer/>}></Route>
          <Route path="/*" element={<NotFound/>}></Route>          
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </div>    
      </BrowserRouter>      
  );
}

export default App;


