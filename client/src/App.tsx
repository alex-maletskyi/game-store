import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar.tsx'


// Define a type for our Game object to use with TypeScript
type Game = {
  id: string;
  title: string;
  platform: string;
  price: number;
};

function App() {
  // Create a state variable to store our array of games
  const [games, setGames] = useState<Game[]>([]);
  
  //utilize usEffect to fetch data
  useEffect(() => {
    //Async function to fetch the data
    const fetchGames = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/games');
        const data = await response.json();
        setGames(data); //Updates state with fetched data (games)
      } catch (error) {
        console.error("Failed to fetch games: ", error);
      }
    }
    fetchGames(); //Using (calling) the function
  }, []); 

  return (
    <div>
      <Navbar />
      
      <h1>GameStore</h1>
      <h2>Games List</h2>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
