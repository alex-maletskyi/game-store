import { useState, useEffect } from 'react';
import CategoryBanner from './components/CategoryBanner/CategoryBanner';
import Navbar from './components/Navbar/Navbar';
import NewsBanner from './components/NewsBanner/NewsBanner';
import GameCard from './components/GameCard/GameCard';
import type { Game } from './types/game';
import './App.css'; 

function App() {
  // Create a state variable to store our array of games
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    //Async function to fetch the data
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/games');
        const data = await response.json();
        setGames(data); //Updates state with fetched data (games)
      } catch (error) {
        console.error("Failed to fetch games:", error);
      }
    };
    fetchGames(); //Using (calling) the function
  }, []);

  return (
    <div>
      <Navbar />
      <NewsBanner />
      {/* using string classNames "mainContent" and "gameGrid" 
        because we are not using a CSS module.
      */}
      <main className="mainContent">
        <h2>Top Deals</h2>
        <div className="horizontalScrollContainer">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </main>
      {/* 2 sections for "Games Under 20" and "New Games" */}
      <div className="categoryGrid">
          <CategoryBanner
            title="Games Under €20"
            subtitle="Explore and find games under €20!"
            linkTo="/games/under-20"
            imageUrl="https://via.placeholder.com/150"
          />
          <CategoryBanner
            title="New In Store"
            subtitle="Take a look at the new games!"
            linkTo="/games/new"
            imageUrl="https://via.placeholder.com/150"
          />
        </div>
    </div>
  );
}

export default App;
