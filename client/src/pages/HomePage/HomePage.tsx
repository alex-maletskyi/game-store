import NewsBanner from '../../components/NewsBanner/NewsBanner';
import GameCard from '../../components/GameCard/GameCard';
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner';
import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';
import { useState, useEffect } from 'react';
import '../../App.css';

const HomePage = () => {
  // fetching data for games
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
          const response = await fetch('http://localhost:5001/api/games');
          const data = await response.json();
          setGames(data);
      } catch (error) {
          console.error("failed to fetch games:", error);
      }
    };
    fetchGames();
  }, []);

  return (
    <div>
      {/* news section */}  
      <NewsBanner />
      <main className="mainContent">
        {/* top deals section */}
        <div className="sectionHeader">
          <h2>Top Deals</h2>
          <Link to="/games" className="viewAllButton">
            View All Games →
          </Link>
        </div>
        <div className="horizontalScrollContainer">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {/* specific deals section */} 
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
      </main>
    </div>
  );
};

export default HomePage;