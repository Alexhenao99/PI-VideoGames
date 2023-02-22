import './App.css';
import { Route, useLocation } from "react-router-dom" 
import Landing from "./pages/Landing/Landing";
import Home from './pages/Home/Home';
import CreateGame from './pages/Form/CreateGame';
import Detail from './pages/Detail/Detail';
import Nav from './pages/Navbar/Nav';
import Footer from './pages/Footer/Footer';
import Searchbar from './pages/Navbar/Searchbar/Searchbar';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== '/' && <Nav/>} 
      <Route exact path={'/'} component={ Landing } />
      <Route exact path={'/home'} component={ Home } />
      <Route exact path="/results/:name" component={ Searchbar } />
      <Route exact path={'/creategame'} component={ CreateGame } />
      <Route exact path={'/detail/:id'} component={ Detail } />
      {location.pathname !== '/' && <Footer/>} 
    </div>
  );
}

export default App;
