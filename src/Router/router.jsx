import { createBrowserRouter, Navigate } from "react-router-dom";
import ProtectedLayout from "../Layouts/ProtectedLayout/ProtectedLayout";
import PublicLayout from "../Layouts/PublicLayout/PublicLayout";
import Home from '../Pages/Home/Home'
import Page1 from "../Pages/LandingPage/Page1/Page1";
import Page2 from "../Pages/LandingPage/Page2/Page2";
import Page6 from "../Pages/LandingPage/Page6/Page6";
import Page3 from "../Pages/LandingPage/Page3/Page3";
import Page4 from "../Pages/LandingPage/Page4/Page4";
import Page5 from "../Pages/LandingPage/Page5/Page5";
import Page7 from "../Pages/LandingPage/Page7/Page7";
import Page8 from "../Pages/LandingPage/Page8/Page8";
import Page9 from "../Pages/LandingPage/Page9/Page9";
import Page10 from "../Pages/LandingPage/Page10/Page10";
import Page11 from "../Pages/LandingPage/Page11/Page11";
import Page12 from "../Pages/LandingPage/Page12/Page12";


import Register from "../Pages/AuthPages/Register/Register";
import Login from "../Pages/AuthPages/Login/Login";
import Footer from "../componets/Footer/Footer";
import Footer8 from "../Pages/FooterPages/Footer8/Footer8";
import Footer7 from "../Pages/FooterPages/Footer7/Footer7";
import Footer10 from "../Pages/FooterPages/Footer10/Footer10";
import Footer11 from "../Pages/FooterPages/Footer11/Footer11";
import Footer12 from "../Pages/FooterPages/Footer12/Footer12";
import Footer13 from "../Pages/FooterPages/Footer13/Footer13";
import Footer14 from "../Pages/FooterPages/Footer14/Footer14";
import Footer15 from "../Pages/FooterPages/Footer15/Footer15";
import Footer16 from "../Pages/FooterPages/Footer16/Footer16";
import Footer17 from "../Pages/FooterPages/Footer17/Footer17";
import Footer18 from "../Pages/FooterPages/Footer18/Footer18";
import LandingPage from "../Pages/LandingPage/First-Page/LandingPage";
import CoreI5 from "../componets/Home/PC GAMER dropdown components/CoreI5";
// import ConfiguraterPc from "../componets/Header/dropdowns/ConfiguraterPc";
import PCgamerMain from "../componets/Home/PC GAMER dropdown components/PCgamerMain";
import ConfigPc from "../componets/Page/ConfigPc";
import DetailedProducts from "../componets/Page/DetailedProducts";
import AMDRyzen from "../componets/Home/PC GAMER dropdown components/AMDRyzen";
import PCgamercomplet from "../componets/Home/PC GAMER dropdown components/PCgamercomplet";
import GamingPC800Euro from "../componets/Home/PC GAMER dropdown components/GamingPC800Euro";
import Windows11 from "../componets/Home/PC GAMER dropdown components/Windows11";
import PcPourJouer from "../Pages/FooterPages/PcPourJouer/PcPourJouer";
import Wukong from "../Pages/FooterPages/Wukong/Wukong";
import Fortnite from "../Pages/FooterPages/Fortnite/Fortnite";
import Minecraft from "../Pages/FooterPages/Minecraft/Minecraft";
import CounterStrike from "../Pages/FooterPages/CounterStrike/CounterStrike";
import Footer6 from "../Pages/FooterPages/Footer6/Footer6";
import Footer5 from "../Pages/FooterPages/Footer5/Footer5";
import Footer4 from "../Pages/FooterPages/Footer4/Footer4";
import Footer3 from "../Pages/FooterPages/Footer3/Footer3";
import Footer2 from "../Pages/FooterPages/Footer2/Footer2";
import Footer1 from "../Pages/FooterPages/Footer1/Footer1";
import Page13 from "../Pages/LandingPage/Page 13/Page13";




const router = createBrowserRouter(
    [
        {
            path: '/',
            element : <PublicLayout />,
            children : [
                {
                    path : '/',
                    element : <Home />
                },
                // home hero carousel landing pages
                {
                    path : '/nvidia-rtx-40-super',
                    element : <Page6 /> //done
                },
                {
                    path : '/ki-pc',
                    element : <Page7 />
                },
                {
                    path : '/intel-core-14-generation',
                    element : <Page8 /> //done
                },
                {
                    path : '/paiement-en-plusieurs-fois-alma',
                    element : <Page9 /> //done
                },
                {
                    path : '/amd-ryzen-7000',
                    element : <Page10 /> //done
                },
                {
                    path : '/corsair-icue-murals',
                    element : <Page11 /> //done
                },
                {
                    path : '/en-securite-avec-windows-11',
                    element : <Page12 /> //done
                },
                {
                    path : '/customer/account/forgotpassword/',
                    element : <Page13 /> //done
                },
    
                {
                    path : '/nvidia-rtx-ai-pcs',
                    element : <Page4 /> //done
                },
                {
                    path : '/amd-ryzen-9000',
                    element : <Page3 /> //done
                },
                {
                    path : '/powered-by-msi',
                    element : <Page2 /> //done
                },
                {
                    path : '/amd-radeon-rx-7800xt-7700xt-game-bundle',
                    element : <Page1 /> //done
                },
                {
                    path : '/nvidia-rtx-40-star-wars-outlaws',
                    element : <LandingPage /> //done
                },
                // PC Gamer navbar pages
                {
                    path : '/pc-gamer',
                    element : <PCgamerMain /> //done
                },
                {
                    path : '/pc-gamer/intel/',
                    element : <PCgamerMain /> //done
                },
                {
                    path : '/pc-gamer/intel/intel-core-i5/', //done
                    element : <CoreI5 />
                },
                {
                    path : '/pc-gamer/intel/intel-core-i7/', //done
                    element : <CoreI5 />
                },
                {
                    path : '/pc-gamer/intel/intel-core-i9/', //done
                    element : <CoreI5 />
                },
                {
                    path : '/pc-gamer/amd/', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/amd/amd-ryzen-5/', //done
                    element : <AMDRyzen />
                },
                {
                    path : '/pc-gamer/amd/amd-ryzen-7/', //done
                    element : <AMDRyzen />
                },
                {
                    path : '/pc-gamer/amd/amd-ryzen-9/', //done
                    element : <AMDRyzen />
                },
                {
                    path : '/pc-gamer/pc-gamer-complet/', //done
                    element : <PCgamercomplet />
                },
                {
                    path : '/pc-gamer/pc-gamer-fixe/', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/pc-gamer-budget/',//done
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/pc-premium-gaming/',//done
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer-800-euro', //done
                    element : <GamingPC800Euro />
                },
                {
                    path : '/pc-gamer-1000-euro',//done
                    element : <GamingPC800Euro />
                },
                {
                    path : '/pc-gamer-1500-euro',//done
                    element : <GamingPC800Euro/>
                },
                {
                    path : '/pc-gamer-2000-euro',//done
                    element : <GamingPC800Euro />
                },
                {
                    path : '/windows-11',//done
                    element : <Windows11 />
                },
                {
                    path : '/windows-11-pc-gaming',//done
                    element : <PCgamerMain />
                },
                {
                    path : '/xbox-game-pass-ultimate',
                    element : <Page5 /> //done
                },
                {
                    path : '/all-pc-gamer',
                    element : <PCgamerMain /> //done
                },
                // configurateur-pc navbar pages
                {
                    path : '/configurateur-pc', //done
                    element : <ConfigPc/>
                },
                {
                    path : '/configurateur-pc/amd-ryzen-4000-5000', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurateur-pc/amd-ryzen-7000-9000', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurateur-pc/intel-core-12-13-14-gen', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurer-pc-gamer/amd-ryzen-7000-9000', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurer-pc-gamer', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-gamer/intel1700', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurer-pc-gamer/intel-core-12-13-14-gen', //done
                    element : <ConfigPc />
                },

                {
                    path : '/configurateur-pc/configurer-un-pc-multimedia', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurateur-pc/configurer-un-pc-de-bureau/', //done
                    element : <ConfigPc />
                },
                {
                    path : '/configurateur-pc/see-all-configurateur-pc', //done
                    element : <ConfigPc />
                },
                // ordinateur-de-bureau navbar pages
                {
                    path : '/ordinateur-de-bureau', //done
                    element : <CoreI5 />
                },
                {
                    path : '/ordinateur-de-bureau/pc-bureautique/office-pc-intel', //done
                    element : <CoreI5 />
                },
                {
                    path : '/ordinateur-de-bureau/pc-bureautique/office-pc-amd', //done
                    element : <CoreI5 />
                },
                {
                    path : '/ordinateur-de-bureau/pc-intelligence-artificielle', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-de-streaming/', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-de-streaming/streaming-pc-intel/', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-de-streaming', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-de-streaming', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/amd-ryzen-7000-9000', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-streaming-amd', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/workstations', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/workstations', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/workstations/nvidia-geforce-rtx-studio-pc',//done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/workstations/', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/pc-multimedia', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/mini-pc', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/ordinateur-de-bureau/securite-windows-11', //done
                    element : <Windows11  />
                },
                // pc-editions-speciales navbar pages
                {
                    path : '/pc-editions-speciales', //done
                    element : <CoreI5 />
                },
                // {
                //     path : '/corsair-icue-murals',
                //     element : <PCgamerMain /> page-11
                // },
                {
                    path : '/pc-pour-jouer',
                    element : <PcPourJouer /> //done
                },
                {
                    path : '/wukong',
                    element : <Wukong /> //done
                },
                {
                    path : '/pc-editions-speciales/pc-pour-jouer/minecraft/', //done
                    element : <Minecraft />
                },
                {
                    path : '/pc-editions-speciales/pc-pour-jouer/fortnite', //done
                    element : <Fortnite />
                },
                {
                    path : '/pc-editions-speciales/pc-pour-jouer/counter-strike-2', //done
                    element : <CounterStrike />
                },
                {
                    path : '/pc-pour-jouer', //done
                    element : <PcPourJouer />
                },
                {
                    path : '/geforce-rtx-serie', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/nvidia-rtx-40-series', //done
                    element : <PCgamerMain />
                },
                // accessoires navbar pages
                {
                    path : '/accessoires-pc', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/ecrans', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/accessoires-pc/clavier', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/accessoires-pc/souris', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/casque-audio', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/accessoires-pc/webcam', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/manettes', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/peripheriques-accessoires-pc/micros', //done
                    element : <PCgamerMain />
                },
                // reductions navbar pages
                {
                    path : '/reductions',
                    element : <PCgamerMain /> //done
                },
                {
                    path : '/nvidia-rtx-deals', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/md-deals', //done
                    element : <PCgamerMain /> 
                },
                {
                    path : '/french-days', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/rentree-scolaire', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/all-reductions', //done
                    element : <PCgamerMain />
                },
                  // promotions navbar pages
                {
                    path : '/promotions', //done
                    element : <PCgamerMain />
                },
                  // auth pages
                {
                    path : '/register', //done
                    element : <Register />
                },
                { 
                    path : '/login', //done
                    element : <Login />
                },
                // footer pages 
                {
                    path : '/pc-gamer/pc-premium-gaming/', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/pc-gamer/pc-gamer-complet/', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/promotions', //done
                    element : <PCgamerMain />
                },
                {
                    path : '/offres', //done
                    element : <PCgamerMain />
                },

                {
                    path : '/les-frais-de-port', //done
                    element : <Footer1 />
                },

                {
                    path : '/livraison', //done
                    element : <Footer2 />
                },

                {
                    path : '/paiement', //done
                    element : <Footer3 />
                },

                {
                    path : '/ssl', //done
                    element : <Footer4 />
                },

                {
                    path : '/cookies', //done
                    element : <Footer4 />
                },

                {
                    path : '/configurateur-pc/configurer-un-pc-gamer/', //done
                    element : <ConfigPc />
                },

                {
                    path : '/les-frais-de-port', //done
                    element : <Footer6 />
                },

                {
                    path : '/comparatif-cartes-graphiques', //done
                    element : <Footer7 />
                },
                {
                    path : '/comparatif-processeur', //done
                    element : <Footer7 />
                },
                {
                    path : '/comparatif-ssd', //done
                    element : <Footer8 />
                },
                {
                    path : '/comparatif-ssd', //done
                    element : <Footer8 />
                },
                {
                    path : '/conditions', //done
                    element : <Footer10 />
                },
                {
                    path : '/droit-de-retractation', //done
                    element : <Footer11 />
                },
                {
                    path : '/mentions-legales', //done
                    element : <Footer12 />
                },
                {
                    path : '/protection-des-donnees', //done
                    element : <Footer13 />
                },
                {
                    path : '/formulaire-d-assistance', //done
                    element : <Footer14 />
                },
                {
                    path : '/batteries-usagees', //done
                    element : <Footer15/>
                },
                {
                    path : '/a-propos-de-nous', //done
                    element : <Footer16/>
                },
                {
                    path : '/contactez-nous', //done
                    element : <Footer17/>
                },
                {
                    path : '/questions-frequentes',// done
                    element : <Footer18/>
                },


            ]
        },
    ]

)


export default router;