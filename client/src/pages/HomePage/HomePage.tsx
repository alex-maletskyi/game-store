import NewsBanner from '../../components/NewsBanner/NewsBanner.tsx'
import GameCard from '../../components/GameCard/GameCard';
import CategoryBanner from '../../components/CategoryBanner/CategoryBanner';
import { Link } from 'react-router-dom';
import type { Game } from '../../types/game';
import { useState, useEffect } from 'react';
import '../../App.css';
//images for 2 (games under 20/new games) banners at the bottom
import cheapGameImg from '../../assets/games-under20.jpg'; 
import newGameImg from '../../assets/new-games.jpg';

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

  //FILTER LOGIC: only keep games that have a salePercentage property
  const discountedGames = games.filter(game => game.salePercentage);

  return (
    <div>
      {/* news section */}  
      <NewsBanner games={games}/>
      {/* top deals section */}
      <main className="mainContent">
        {/* top deals section */}
        <div className="sectionHeader">
          <h2>Top Deals</h2>
          <Link to="/games" className="viewAllButton">
            View All Games →
          </Link>
        </div>
        <div className="horizontalScrollContainer">
          {/*since it maps over 'discounted games', it will only show discounted games here */}
          {discountedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
        {/* specific deals section */} 
        <div className="categoryGrid">
          <CategoryBanner
            title="Games Under €20"
            subtitle="Explore and find games under €20!"
            linkTo="/games/under-20"
            imageUrl={cheapGameImg}
          />
          <CategoryBanner
            title="New In Store"
            subtitle="Take a look at the new games!"
            linkTo="/games/new"
            imageUrl={newGameImg}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;