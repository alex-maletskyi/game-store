import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import GameDetailsPage from './pages/GameDetailsPage/GameDetailsPage';
import GameBrowsePage from './pages/GameBrowsePage/GameBrowsePage';
import AuthModal from './components/AuthModal/AuthModal';
import './App.css'; 

function App() {
/* using useState here because we need the modal's 'open' or 'closed'
// state to be 'remembered' by react between renders. */
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  /* funct. to open the modal */
  const openAuthModal = () => {
    setIsAuthModalOpen(true);
  };
  /* funct. to close the modal */
  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
  };
  return (
    <div>
      <Navbar onLoginClick={openAuthModal} />
      
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
      {/* if isAuthModalOpen is true, then render the modal) */}
      {isAuthModalOpen && <AuthModal onClose={closeAuthModal} />}
    </div>
  );
}

export default App;