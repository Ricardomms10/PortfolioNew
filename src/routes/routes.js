import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/index"
import { Projeto } from "../components/projeto/index";



export const AppRoutes = () => (

    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projeto" element={<Projeto />} />
        </Routes>
    </BrowserRouter>
)