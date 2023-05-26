import './App.css';
import { Route, useLocation } from "react-router-dom" 
import Landing from "./pages/Landing/Landing";
import Home from './pages/Home/Home';
import CreateGame from './pages/Form/CreateGame';
import Detail from './pages/Detail/Detail';
import Nav from './pages/Navbar/Nav';
import Footer from './pages/Footer/Footer';
import Searchbar from './pages/Navbar/Searchbar/Searchbar';
import UpdateGame from './pages/Form/Update/UpdateGame';
import axios from 'axios';
axios.defaults.baseURL = 'https://pi-videogames-production-8ffa.up.railway.app';

function App() {
  const location = useLocation();
  return (
    <div id="App">
      {location.pathname !== '/' && <Nav/>} 
      <Route exact path={'/'} component={ Landing } />
      <Route exact path={'/home'} component={ Home } />
      <Route exact path={'/games/:name'} component={ Searchbar } />
      <Route exact path={'/detail/:id'} component={ Detail } />
      <Route exact path={'/creategame'} component={ CreateGame } />
      <Route exact path={'/updategame/:id'} component={ UpdateGame } />
      {location.pathname !== '/' && <Footer/>} 
    </div>
  );
}

export default App;
