
import './App.css';
import Card from './componets/Card/Card';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeCarosuel from './componets/Home-carsoeul/HomeCarosuel';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import Page1 from './Pages/Page1/Page1';
import Page2 from './Pages/Page2/Page2';
import Page3 from './Pages/Page3/Page3';
import Page4 from './Pages/Page4/Page4';
import Page5 from './Pages/Page5/Page5';
import Page6 from './Pages/Page6/Page6';
import Page7 from './Pages/Page7/Page7';
import Page8 from './Pages/Page8/Page8';
import Page9 from './Pages/Page9/Page9';
import Page10 from './Pages/Page10/Page10';
import Page11 from './Pages/Page11/Page11';
import Page12 from './Pages/Page12/Page12';
import PcPourJouer from './Pages/PcPourJouer/PcPourJouer';
import Wukong from './Pages/Wukong/Wukong';
import Starfield from './Pages/Starfield/Starfield';
import Diablo from './Pages/Diablo/Diablo';
import Minecraft from './Pages/Minecraft/Minecraft';
import Fortnite from './Pages/Fortnite/Fortnite';
import CounterStrike from './Pages/CounterStrike/CounterStrike';
import Promotions from './Pages/Promotions/Promotions';
import Footer1 from './Pages/Footer1/Footer1';
import Footer2 from './Pages/Footer2/Footer2';
import Footer3 from './Pages/Footer3/Footer3';
import Footer4 from './Pages/Footer4/Footer4';
import Footer5 from './Pages/Footer5/Footer5';
import Footer6 from './Pages/Footer6/Footer6';
import Footer7 from './Pages/Footer7/Footer7';
import Footer8 from './Pages/Footer8/Footer8';



function App() {
  return (
    <>
      {/* <Header/> */}

      {/* <Card /> */}


      <Routes>
        <Route path='/' element={<HomeCarosuel />} />
        {/* Carosuel Page  */}
        <Route path='/landing-page' element={<LandingPage />} />
        <Route path='/page-1' element={<Page1 />} />
        <Route path='/page-2' element={<Page2 />} />
        <Route path='/page-3' element={<Page3 />} />
        <Route path='/page-4' element={<Page4 />} />
        <Route path='/page-5' element={<Page5 />} />
        <Route path='/page-6' element={<Page6 />} />
        <Route path='/page-7' element={<Page7 />} />  {/*  Hassan designed this page*/}
        <Route path='/page-8' element={<Page8 />} />
        <Route path='/page-9' element={<Page9 />} />
        <Route path='/page-10' element={<Page10 />} />
        <Route path='/page-11' element={<Page11 />} />
        <Route path='/page-12' element={<Page12 />} />


        {/* static page  */}

        <Route path='/corsair-icue-murals' element={<Page11 />} /> {/* This page is already covered by Page 11 */}
        <Route path='/nvidia-rtx-40-series' element={<Page6 />} /> {/* This page is already covered by Page 11 */}
        <Route path='/pc-pour-jouer' element={<PcPourJouer />} />
        <Route path='/wukong' element={<Wukong />} />
        <Route path='/starfield' element={<Starfield />} />
        <Route path='/diablo' element={<Diablo />} />
        <Route path='/minecraft' element={<Minecraft />} />
        <Route path='/fortnite' element={<Fortnite />} />
        <Route path='/counter-strike' element={<CounterStrike />} />
        <Route path='/promotions' element={<Promotions />} />

        {/* footer page  */}

        <Route path='/les-frais-de-port' element={<Footer1 />} />
        <Route path='/livraison' element={<Footer2 />} />
        <Route path='/paiement' element={<Footer3 />} />
        <Route path='/ssl' element={<Footer4 />} />
        {/* <Route path='/configurateur-pc' element={<Footer4/>} /> {/*  Hassan designed this page*/} 
        <Route path='/pc-gamer/pc-pour-jouer' element={<Footer5 />} />
        
        <Route path='/comparatif-cartes-graphiques' element={<Footer6 />} />

        <Route path='/comparatif-processeur' element={<Footer7/>} />   {/* table remain */}

        <Route path='/comparatif-ssd' element={<Footer8/>} />

      </Routes>

      {/* <Footer/> */}


    </>
  );
}

export default App;
