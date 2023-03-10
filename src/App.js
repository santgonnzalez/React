import ItemListContainer from './components/itemListContainer/itemListContainer'
import NavBar from './components/NavBar/NavBar'
import './App.css';


function App() {
  return (
    <div className="container-fluid">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos a mi Ecommerce: ProdigyTech'}/>
    </div>
  );
}

export default App;