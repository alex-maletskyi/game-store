import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // import useParams
import type { Game } from '../../types/game';
import '../../App.css'; 
import styles from './GameDetailsPage.module.css';

const GameDetailsPage = () => {
  /* useparams gets the 'id' from the url: /game/:id */
  const { id } = useParams();
  
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        /* fetch data from the new backend endpoint using the id */
        const response = await fetch(`http://localhost:5001/api/games/${id}`);
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error("failed to fetch game:", error);
      }
    };

    fetchGame();
  }, [id]); // re-run this effect if the id in the url changes

  /* shows a loading message until the game data arrives */
  if (!game) {
    return <div className="mainContent">Loading...</div>;
  }

  /* once loaded, display the game details */
  return (
    <main className={`mainContent ${styles.detailsLayout}`}>
      
      {/* left column: image */}
      <div className={styles.leftColumn}>
        <img src={game.imageUrl} alt={game.title} className={styles.mainImage} />
      </div>

      {/* right column: info & buy buttons */}
      <div className={styles.rightColumn}>
        <h1>{game.title}</h1>
        <p className={styles.price}>${game.price.toFixed(2)}</p>

        <div className={styles.buttonGroup}>
          <button className={`${styles.buyButton} ${styles.addToCart}`}>Add to Cart</button>
          <button className={`${styles.buyButton} ${styles.buyNow}`}>Buy Now</button>
        </div>
        
        <div className={styles.description}>
          <h3>Product Description</h3>
          <p>{game.description}</p>
        </div>
      </div>
    </main>
  );
};

export default GameDetailsPage;