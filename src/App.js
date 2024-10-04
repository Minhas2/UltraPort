
import './App.css';
import Footer from './componets/Footer/Footer';
import Header from './componets/Header/Header';
import Advantages from './componets/Home/Advantages/Advantages';
import Categories from './componets/Home/Categories/Categories';
import Passion from './componets/Home/Passion/Passion'
import HeroUltra from './componets/Home/UltraPort/HeroUltra'
import Influencers from './componets/Home/Influencers/Influencers';
import HomeCarosuel from './componets/Home/Home-carsoeul/HomeCarosuel';


import '@fortawesome/fontawesome-free/css/all.min.css';
import Review from './componets/Home/Review/Review';
import DetailedProducts from './componets/Page/DetailedProducts';
import ConfigPc from './componets/Page/ConfigPc';





function App() {
  return (
    <>
<Header/>

{/* HOME COMPonents DOWN */}
{/* <HomeCarosuel/> */}
{/* <HeroUltra/> */}
{/* <Passion/> */}
{/* <Categories/> */}
{/* <Influencers/> */}
{/* <Advantages/> */}

{/* <Review/> */}
{/* HOME COMPonents DOWN END*/}


{/* Detaile product start */}
{/* <DetailedProducts/> */}
<ConfigPc/>





<Footer/>


</>
  );
}

export default App;
