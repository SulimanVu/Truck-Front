import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./pages/MainPage/Main";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import User from "./pages/UserPage/User";
import FormRegistration from "./pages/FormRegistration/FormRegistration";
import About from "./pages/About/About";
// import CarsPage from './pages/CarsPage/CarsPage'
// import OneCar from './pages/OnePage/OnePage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/user" element={<User />} />
        <Route path="/login" element={<FormRegistration />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='/cars' element={<CarsPage/>} />
          <Route path='/car' element={<OneCar />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
