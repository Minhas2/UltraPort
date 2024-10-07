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
import Page13 from "../Pages/LandingPage/Page12/Page12";



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
                    path : '/xbox-game-pass-ultimate',
                    element : <Page5 /> //done
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
                    element : <Page13 />
                },
            ]
        },
    ]

)


export default router;