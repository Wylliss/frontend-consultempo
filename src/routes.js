import React from "react";

import Home from "./pages/HomePage";
import Previsao from "./pages/PrevisaoPage";
import Historico from "./pages/HistoricoPage";
import { Switch, Route,  } from 'react-router-dom';

const Routes = () => {
   return(
       <Switch>
           <Route path="/" exact>
               <Home />
           </Route>
           <Route path="/previsao" exact >
               <Previsao />
           </Route>
           <Route path="/historico" exact >
                <Historico />               
           </Route>
       </Switch>
   )
}

export default Routes;