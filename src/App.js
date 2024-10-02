
import './App.css';
import Card from './componets/Card/Card';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeCarosuel from './componets/Home-carsoeul/HomeCarosuel';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';



function App() {
  return (
    <>
      {/* <Header/> */}

      {/* <Card /> */}
     

      <Routes>
        <Route path='/' element={<HomeCarosuel />} />
        <Route path='/landing-page' element={<LandingPage />} />

      </Routes>

      {/* <Footer/> */}


    </>
  );
}

export default App;
