import logo from './logo.svg';
import './App.css';
import LogoComponent from './Componentes/LogoComponent';
import NavComponent from './Componentes/NavComponent';
import BodyComponent from './Componentes/BodyComponent';
import FooterComponent from './Componentes/FooterComponent';
import HomeComponent from '../src/Componentes/pages/HomeComponent';
import OurServiceComponent from '../src/Componentes/pages/OurServiceComponent';
import AboutComponent from '../src/Componentes/pages/AboutComponent';
import TechnologyComponent from '../src/Componentes/pages/TechnologyComponent';
import ContactUsComponent from '../src/Componentes/pages/ContactUsComponent';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/styles/smsstyles.css'
function App() {
  return (
    <div>
      <LogoComponent></LogoComponent>
      <NavComponent></NavComponent>
      <Router>
    <Routes>
        <Route exact path="/" component={<HomeComponent />} />
        <Route exact path="/Our Service" component={<OurServiceComponent/>} />
        <Route exact path="/About us" component={<AboutComponent/>} />
        <Route exact path="/TEchnology" component={<TechnologyComponent/>} />
        <Route exact path="/Contact Us" component={<ContactUsComponent/>} />
    </Routes>
    </Router>
      <BodyComponent></BodyComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
