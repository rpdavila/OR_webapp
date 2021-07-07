import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Lessons from "./components/Lessons/Lessons";
import Contact from "./components/Contact/Contact"
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
// import Signin from "./components/Siginin/Signin";
// import Register from './components/Register/Register';
// import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path={'/privacy'}>
            <PrivacyPolicy />
          </Route>
          <Route path={'/contact'}>
            <Contact />
          </Route>
          <Route path={'/services'}>
            <Services />
          </Route>
          <Route path={'/about'}>
            <About />
          </Route>
          <Route path={'/lessons'}>
            <Lessons />
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
