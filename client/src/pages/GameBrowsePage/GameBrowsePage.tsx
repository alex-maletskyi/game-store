import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Game } from '../types/Game'; 
import GameCard from '../components/GameCard'; 

const GameBrowsePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchGames = async () => {
      try {
          const response = await axios.get<Game[]>('http://localhost:3000/api/games');
          setGames(response.data);
      } catch (error) {
          console.error("Failed to fetch games:", error);
      } finally {
          setLoading(false);
      }
    };
    fetchGames();
  }, []);

  if (loading) return <div className="text-center text-white py-10">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white mb-6">All Games</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GameBrowsePage;