
import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/MainPage/Main";
import Footer from "./components/Footer/Footer";
import User from "./pages/UserPage/User";
import FormRegistration from "./pages/FormRegistration/FormRegistration";
import About from "./pages/About/About";
import CarsPage from "./pages/CarsPage/CarsPage";
import OneCar from './pages/OneCar/OneCar'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/login" element={<FormRegistration />} />
        <Route path="/about" element={<About />} />
        <Route path='/cars' element={<CarsPage/>} />
        <Route path='/car/:id' element={<OneCar />} />
      </Routes>
      <Footer />
    </>

  );
}

export default App;