import React from 'react';
import logo from './logo.svg';
import HelloWorld from './Components/HelloWorld'
import CounterExample from './Components/CounterExample'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './Views/Home'
import About from './Views/About'
import Product from './Views/Product';

function App() {
  return (
      <div>
        {/* <HelloWorld name='Simone'></HelloWorld> */}
        {/* <CounterExample/> */}
        
        <Router>
          <Header/>
            
              <div className="p-3">
                <Switch>
                  <Route exact path='/'>
                    <Home/>
                  </Route>
                  <Route path='/about'>
                    <About/>
                  </Route>
                  <Route path='/products/:id'>
                    <Product/>
                  </Route>
                </Switch>
              </div>


          <Footer/>
        </Router>
      </div>

    
    
  );
}

export default App;
