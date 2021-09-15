import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import "./assets/css/styles.css";
import "./assets/css/colors.css";
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Contact from './sections/Contact';
import NoMatch from './sections/Error404';




function App() {
  return (
      <Router>
        <>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </>
      </Router>
  );
}

export default App;