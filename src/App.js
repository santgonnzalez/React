import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CartProvider } from './context/CartContext';
import { Notification, NotificationProvider } from './notification/NotificationService';
import Login from './components/Login/Login';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <div className='App'>
      <NotificationProvider>
        <BrowserRouter>
            <AuthProvider>
              <CartProvider>
                <NavBar /> 
                <Routes>
                  <Route path='/' element={<ItemListContainer greeting={'Todos nuestros productos'} />} />
                  <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
                  <Route path='/category/:categoryId/subcategory/:subcategoryId' element={<ItemListContainer greeting={'Productos filtrados por categoria'} />} />
                  <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                  <Route path='/login' element={<Login />} />
                </Routes>
              </CartProvider>
            </AuthProvider>
        </BrowserRouter>
      </NotificationProvider>
    </div>
  )
}

export default App