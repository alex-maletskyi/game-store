import { useState, useEffect } from 'react';
import type { Game } from '../../types/game';
import GameCard from '../../components/GameCard/GameCard';
import '../../App.css'; 

const GameBrowsePage = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(true); // track loading status
  const [error, setError] = useState<string | null>(null); // track errors

  useEffect(() => {
    const fetchGames = async () => {
      try {
        //ensure this port matches the server (5001)
        const response = await fetch('http://localhost:5001/api/games');
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setGames(data);
      } catch (err) {
          console.error("Failed to fetch games:", err);
          setError("Failed to load games. Make sure the server is running on port 5001.");
      } finally {
          setIsLoading(false); //stop loading whether it worked or failed
      }
    };

    fetchGames();
  }, []);

  if (isLoading) {
    return <div className="mainContent"><h2>Loading games...</h2></div>;
  }

  if (error) {
    return <div className="mainContent"><h2>Error: {error}</h2></div>;
  }

  return (
    <main className="mainContent">
      <h2>All Games</h2>
      <div className="gameGrid">
        {games.length > 0 ? (
            games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))
        ) : (
            <p>No games found in the database.</p>
        )}
      </div>
    </main>
  );
};

export default GameBrowsePage;