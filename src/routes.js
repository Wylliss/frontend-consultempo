import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/HomePage";
import Previsao from "./pages/PrevisaoPage";
import Historico from "./pages/HistoricoPage";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Home }  path="/" exact />
           <Route component = { Previsao }  path="/previsao" exact />
           <Route component = { Historico }  path="/historico" exact />
       </BrowserRouter>
   )
}

export default Routes;