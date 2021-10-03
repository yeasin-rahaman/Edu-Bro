import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MenuBar from './Components/MenuBar/MenuBar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import ContactUs from './Components/ContsctUs/ContactUs';
import Services from './Components/Services/Services';


function App() {
  return (

    <div>
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>


  );
}

export default App;
