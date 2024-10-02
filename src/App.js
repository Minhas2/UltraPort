
import './App.css';
import Card from './componets/Card/Card';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Advantages from './componets/Home/Advantages/Advantages';
import Categories from './componets/Home/Categories/Categories';
import Passion from './componets/Home/Passion/Passion'
import HeroUltra from './componets/Home/UltraPort/HeroUltra'
import Influencers from './componets/Home/Influencers/Influencers';
import HomeCarosuel from './componets/Home/Home-carsoeul/HomeCarosuel';


import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeCarosuel from './componets/Home-carsoeul/HomeCarosuel';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Review from './componets/Home/Review/Review';



function App() {
  return (
    <>
      <Header/>


<HomeCarosuel/>
<HeroUltra/>

<Passion/>
<Categories/>

{/* <Influencers/> */}
<Advantages/>


<Review/>


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
