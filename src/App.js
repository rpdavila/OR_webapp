import React, { Component } from 'react';
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
import Amplify from '@aws-amplify/core'
import config from '../src/aws-exports'
import './App.css';
import SideDrawer from './components/NavBar_Mobile/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

Amplify.configure(config)

class App extends Component {

  state = {
    sideDrawerOpen: false
  };
  

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideBarOpen }
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    return (
      <Router>
        <div className="App" style={{height: '100%'}}>
          <NavBar drawerClickHandler={this.drawerToggleClickHandler}/>
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
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
}

export default App;
