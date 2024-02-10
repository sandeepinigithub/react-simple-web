import logo from './logo.svg';
import './App.scss';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SwiperComponent from './components/SwiperComponent/SwiperComponent';
import Features from './components/Features/Features';
import Works from './components/Works/Works';
import Services from './components/Services/Services';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <SwiperComponent />
      <Features />
      <Works />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
