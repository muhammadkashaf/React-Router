import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About'
import { BrowserRouter, Route } from 'react-router-dom';



class App extends React.Component {

  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />

          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>

    );
  }

}

export default App;
