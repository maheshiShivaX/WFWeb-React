import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import 'aos/dist/aos.css';
import Login from './Components/AdminPage/Login';
import Register from './Components/AdminPage/Register';
import ForgotPassword from './Components/AdminPage/forgotPaswswod';
import CompanyProfile from './Components/CompanyProfile';

function App() {
  return (
    <div className="App">
      <HashRouter>
        {/* <Helmet>
        <title>Buy Smart QR Tag, Labels & Stickers for Bike, Car and Pet</title>
        <meta name="description"
          content="LifeCode smart QR tag, label, and stickers offer safety solutions for Bike, Car, luggage and Pets. Scan for quick access to essential info." />
        <meta
          name="keywords"
          content="Helmet Safety QR Code Smart Sticker, QR Code Smart Tag and Sticker for Helmet, Bike helmet emergency Sticker, Emergency QR Sticker For Bike Safety, Smart QR Code Sticker for 2 Wheeler, Buy Parking QR Tag for Bike, QR Code Smart Sticker for Car, Smart QR Sticker for Cars, Emergency QR Sticker For Car Safety, Buy Car Sticker QR Code Online, QR code smart sticker for car price, Buy QR Code Luggage Tag, QR Code Luggage Tag Without GPS, QR Code on Luggage Tags, QR Scannable Labels for Luggage, Smart ID Tags for Luggage, Lost & Found Labels for Luggage, Lost and Found QR Tag for Luggage, Vehicle Safety QR code Sticker, Vehicle Safety QR code Sticker without GPS, Buy Vehicle Safety QR Tag, Smart QR Code Sticker for Emergency, Emergency Smart QR Tag and Stickers, QR Code Pet ID Tag, QR Code Pet ID Tag Without GPS, Shop QR Code Pet ID Tags, QR Code Dog Tag, Emergency QR Sticker For Pet Safety, Lost & Found Labels for Pet, QR Code Smart Sticker for Pet, Buy Digital Keychain, QR Code Digital Keychain, QR Code Smart Keychain, QR Code Smart Keyring, QR code smart keychain online, Buy Lost and Found Tag Online, Lost and Found Tag Without GPS, Buy Lost & Found QR Label Sticker TAGs, Smart QR Code Lost & Found Tags, Buy Lost-and-Found QR Code Labels Stickers and Tags"
        />
      </Helmet> */}

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="login" element={<Login />} />
          <Route exact path="register" element={<Register />} />
          <Route exact path="forgotpassword" element={<ForgotPassword />} />
          <Route exact path="companyprofile" element={<CompanyProfile />} />
        </Routes>

      </HashRouter>
    </div>
  );
}

export default App;
