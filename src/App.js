import './App.css';
import Header from './components/Header'
import Headerday01 from './components/challenges/day01/AboutMe'
import AboutMe from './components/challenges/day01/AboutMe';
import Home from './components/Home'
import Footer from './components/Footer'
function App() { //this is the root component
  const name = 'Zach' // JS is above return statement can be
  //injected into JSX using {}
  return (
    <div className="App">
      <h1>Welcome to React, {name}</h1>
      <h2>We just modified our root App component</h2>
      <Header /> {/* this is how you mount a component */}
      <AboutMe />
      <Home />
      <Footer />
    </div>

  );
}

export default App;