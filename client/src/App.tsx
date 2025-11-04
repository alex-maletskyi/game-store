import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import GameDetailsPage from './pages/GameDetailsPage/GameDetailsPage';
import GameBrowsePage from './pages/GameBrowsePage/GameBrowsePage';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        {/* tells the router:
          when the url is exactly "/", render the HomePage component/page
        */}
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:id" element={<GameDetailsPage />} />
        <Route path="/games" element={<GameBrowsePage />} />
        {/* add other pages here:
          <route path="/cart" element={<cartpage />} />
        */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;