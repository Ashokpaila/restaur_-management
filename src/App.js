
import MenuItems from './MenuItems';
import OrderManagement from './OrderManagement';
import './App.css';
import HomePage from './HomePage';
import TableManagement from './TableManagement';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import { React,useState } from 'react';
function App() {
const [customerOrder,setCustomerOrder]=useState([]);
const handleCustomerOrder= (data)=>{
 setCustomerOrder(data);
}
console.log(customerOrder)
  return (
    <div>
      <BrowserRouter>
      <Routes>
     <Route path="/" element={<HomePage />} />
     <Route path="/menu" element={<MenuItems handleCustomerOrder={handleCustomerOrder} />}/>
     <Route path="/book-table" element={<TableManagement />} />
     <Route path="/order-management" element={<OrderManagement />} />
     <Route path="/login" element={<LoginPage />} />
     <Route path="/contact" element={<MenuItems />} />
   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
