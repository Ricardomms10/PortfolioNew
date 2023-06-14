import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../components/home/index"
import { Projeto } from "../components/projeto/index";
import { Contato } from "../components/contato";


export const AppRoutes = () => (

    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Projeto" element={<Projeto />} />
          <Route exact path="/Contato" element={<Contato />} />
        </Routes>
    </BrowserRouter>
)