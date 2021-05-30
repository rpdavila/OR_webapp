import NavBar from "./components/NavBar/NavBar";
import Route from "./components/Router/Routes";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import './App.css';
import Lessons from "./components/Lessons/Lessons";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path={'/'}>
          <Home/>
      </Route>
      <Route path={'/about'}>
          <About />
      </Route>
      <Route path={'/lessons'}>
          <Lessons />
      </Route>
      <Route path={'/pm'}>
          <Services />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
