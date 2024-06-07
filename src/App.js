import 'aos/dist/aos.css'; // Import AOS CSS
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from './Components/Cart/Cart';
import CartInformation from './Components/CartInformation/CartInformation';
import CreateUser from './Components/CreateUser/CreateUser';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import LoginPage from './Components/LoginPage/LoginPage';
import MainLandingpage from './Components/MainLandingPage/MainLandingpage';
import Payment from './Components/Payment/Payment';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import Shipping from './Components/Shipping/Shipping';
import Wishlist from './Components/Wishlist/Wishlist';

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLandingpage />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CreateUser" element={<CreateUser />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/CartInformation" element={<CartInformation />} />
          <Route path="/Shipping" element={<Shipping />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
