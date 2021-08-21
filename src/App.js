
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/pages/Navbar.js"
// import MainPage from "./components/pages/Pages2/Mainpage"
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import Form from './components/pages/SignUp/Form';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/sign-up' component={Form} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
