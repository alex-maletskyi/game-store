import { useState, useEffect } from 'react';
import type { Game } from '../../types/game';
import GameCard from '../../components/GameCard/GameCard';
import '../../App.css'; // reuse the global styles)

const GameBrowsePage = () => {
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
    <main className="mainContent">
      <h2>All Games</h2>
      {/* reuse the same css class as the homepage grid as well as the GameCard component*/}
      <div className="gameGrid">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </main>
  );
};

export default GameBrowsePage;