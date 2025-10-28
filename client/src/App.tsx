import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import './App.css'; 

function App() {
  return (
    <div>
      <Navbar />
      
      <Routes>
        {/* this rule tells the router:
          when the url is exactly "/", render the HomePage component/page
        */}
        <Route path="/" element={<HomePage />} />

        {/* add other pages here:
          <route path="/cart" element={<cartpage />} />
          <route path="/game/:id" element={<gamedetailspage />} />
        */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;