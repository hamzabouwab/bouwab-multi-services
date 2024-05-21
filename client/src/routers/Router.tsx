import {  createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom"
import HomeScreen from "../pages/Home/HomeScreen"
import NotFound from "../pages/NotFound/NotFound"
import Inscription from "../pages/Inscription/Inscription"



export const Router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/signup" element={<Inscription />} />
        </Route>
        
    )
)

