import crypto from 'crypto';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/App.css';
import Footer from './components/footer';
import ProtectedRoute from './Hooks/ProtectedRoute';
import ProtectedDipendente from './Hooks/ProtectedDipendente';
import ProtectedAccount from './Hooks/ProtectedAccount';
import ProtectedAccountd from './Hooks/ProtectedAccountd';
import ProtectedPrenotazione from './Hooks/ProtectedPrenotazione';
import ProtectedIncarichi from './Hooks/ProtectedIncarichi';
import ProtectedConsegnac from './Hooks/ProtectedConsegnac';
import ProtectedConsegnad from './Hooks/ProtectedConsegnad';
import ProtectedOrdine from './Hooks/ProtectedOrdine';
import ProtectedPagamento from './Hooks/ProtectedPagamento';
import ProtectedStorico from './Hooks/ProtectedStorico';
import ProtectedPre from './Hooks/ProtectedPre';
import ProtectedRiepilogo from './Hooks/ProtectedRiepilogo';
import ProtectedTassista from './Hooks/ProtectedTassista';
import ProtectedPreGestione from './Hooks/ProtectedPreGestione';
//import di tutte le pagine del sito

import account from './pages/account/account';
import accountd from './pages/account/accountd';
import assistenza from './pages/assistenza/assistenza';
import catalogo from './pages/catalogo/catalogo';
import login from './pages/login/login';
import main from './pages/main/main_cliente';
import maindip from './pages/main/main_dipendente';
import notFound from './pages/notFound/notFound';
import notificacliente from './pages/notificaConsegna/notificacliente/notificacliente';
import notificadipendente from './pages/notificaConsegna/dipendente/notificadipendente';
import ordine from './pages/ordine/ordine';
import pagamento from './pages/pagamento/pagamento_autonomo';
import paginaIniziale from './pages/paginaIniziale/paginainiziale';
import recuperaPassword from './pages/recuperaPassword/recuperapassword';
import registrazione from './pages/registrazione/registrazione';
import storico from './pages/storico/storico';
import gestioneprenotazione from './pages/gestionePrenotazione/gestioneprenotazione';
import visualizzaIncarichi from './pages/visualizzaIncarichi/visualizzaIncarichi';
import riepilogo from './pages/riepilogo_ordine/riepilogo';
import preordine from './pages/ordine/preordine';
import tassista from './pages/ordine/tassista';
import pregestione from './pages/gestionePrenotazione/pregestione';




function App() {

  const token = localStorage.getItem("token");
  
  let who = localStorage.getItem("who");
 

  return <Router>
  
    <div>
      <Switch>
        {/*route generali da utente, nessuna protezione necessaria*/}
        <Route path="/" exact component={paginaIniziale} />
        <Route path="/login" exact component={login}/>
        <Route path="/registrazione" exact component={registrazione}/>
        <Route path="/assistenza" exact component={assistenza}/>
        <Route path="/catalogo" exact component={catalogo}/>
        <Route path="/recuperapassword" exact component={recuperaPassword}/>
        
        {/*route protette cliente*/}
        <ProtectedRoute path="/main" component={main} isAuth={token} isEmployee={who} />
        <ProtectedDipendente path="/maindip" component={maindip} isAuth={token} isEmployee={who}/>
        <ProtectedPre path="/preordine" component={preordine} isAuth={token} isEmployee={who}/>
        <ProtectedOrdine path="/ordine" exact component={ordine} isAuth={token} isEmployee={who}/>
        <ProtectedTassista path="/tassista" component={tassista} isAuth={token} isEmployee={who}/>
        <ProtectedPagamento path="/pagamento" exact component={pagamento} isAuth={token} isEmployee={who}/>
        <ProtectedRiepilogo path="/riepilogo" component={riepilogo} isAuth={token} isEmployee={who}/>
        <ProtectedPrenotazione path="/gestioneprenotazione" exact component={gestioneprenotazione} isAuth={token} isEmployee={who}/>
        <ProtectedConsegnac path="/notificacliente" exact component={notificacliente} isAuth={token} isEmployee={who}/>
        <ProtectedStorico path="/storico" exact component={storico} isAuth={token} isEmployee={who}/>
        <ProtectedAccount path="/account" exact component={account} isAuth={token} isEmployee={who}/>
        <ProtectedPreGestione path="/pregestione" exact component={pregestione} isAuth={token} isEmployee={who}/>

        {/*route protette dipendente*/}
        <ProtectedConsegnad path="/notificadipendente" exact component={notificadipendente} isAuth={token} isEmployee={who}/>
        <ProtectedIncarichi path="/visualizzaIncarichi" exact component={visualizzaIncarichi} isAuth={token} isEmployee={who}/>
        <ProtectedAccountd path="/accountd" exact component={accountd} isAuth={token} isEmployee={who}/>
        
        
        {/*route not found*/}
        <Route path="*" exact component={notFound}/>


      </Switch>
    </div>
    <Footer></Footer>
  </Router>

}

export default App;