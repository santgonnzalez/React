import ItemListContainer from "./components/itemListCointainer/itemListContainer";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import NavBar from './components/NavBar/NavBar'
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Bienvenidos a mi Ecommerce: ProdigyTech'}/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados: '}/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
} 

export default App;


// 'Bienvenidos a mi Ecommerce: ProdigyTech'