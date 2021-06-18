import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Lessons from "./components/Lessons/Lessons";
import Signin from "./components/Siginin/Signin";
import Register from './components/Register/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path={'/pm'}>
            <Services />
          </Route>
          <Route path={'/about'}>
            <About />
          </Route>
          <Route path={'/lessons'}>
            <Lessons />
          </Route>
          <Route path={'/signin'}>
            <Signin />
          </Route>
          <Route path={'/register'}>
            <Register />
          </Route>
          <Route path={'/'}>
            <Home />
          </Route>
        </Switch>      
        <Footer />
      </div>
    </Router>
  );
}

export default App;
