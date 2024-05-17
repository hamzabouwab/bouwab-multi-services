import {  createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom"
import HomeScreen from "../pages/Home/HomeScreen"
import NotFound from "../pages/NotFound/NotFound"



export const Router = createBrowserRouter(
    createRoutesFromElements(

        <Route>
            <Route path="/" element={<HomeScreen />} />
            <Route path="*" element={<NotFound />} />
        </Route>
        
    )
)

