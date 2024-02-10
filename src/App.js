import logo from './logo.svg';
import './App.scss';

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SwiperComponent from './components/SwiperComponent/SwiperComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <SwiperComponent />
      <Footer />
    </div>
  );
}

export default App;
