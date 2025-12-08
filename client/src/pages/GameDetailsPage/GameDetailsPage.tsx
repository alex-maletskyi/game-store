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
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/games/${id}`);
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
    <main className={`mainContent ${styles.container}`}>
      
      {/* TOP SECTION: Main Info (Image + Details) */}
      <div className={styles.topSection}>
        <img src={game.imageUrl} alt={game.title} className={styles.mainImage} />
        
        <div className={styles.infoColumn}>
          <div className={styles.header}>
            <span className={styles.platformBadge}>{game.platform}</span>
            {game.releaseDate && <span className={styles.date}>{game.releaseDate}</span>}
          </div>
          
          <h1 className={styles.title}>{game.title}</h1>

          {/* Display Genres */}
          <div className={styles.genres}>
            {game.genres?.map((genre) => (
              <span key={genre} className={styles.genreTag}>{genre}</span>
            ))}
          </div>

          {/* Price Block with Sale Logic */}
          <div className={styles.priceBlock}>
            {game.salePercentage ? (
              <>
                <span className={styles.oldPrice}>${game.price.toFixed(2)}</span>
                <span className={styles.finalPrice}>
                  ${(game.price * (1 - game.salePercentage / 100)).toFixed(2)}
                </span>
                <span className={styles.saleBadge}>-{game.salePercentage}%</span>
              </>
            ) : (
              <span className={styles.finalPrice}>${game.price.toFixed(2)}</span>
            )}
          </div>

          <div className={styles.buttonGroup}>
            <button className={`${styles.btn} ${styles.cartBtn}`}>Add to Cart</button>
            <button className={`${styles.btn} ${styles.buyBtn}`}>Buy Now</button>
            <button className={`${styles.btn} ${styles.wishlistBtn}`}>❤️</button>
          </div>
        </div>
      </div>

      {/* MIDDLE SECTION: Description */}
      <div className={styles.descriptionSection}>
        <h3>About this game</h3>
        <p>{game.description}</p>
      </div>

      {/* BOTTOM SECTION: Screenshots Gallery */}
      {game.screenshots && game.screenshots.length > 0 && (
        <div className={styles.mediaSection}>
          <h3>Gallery</h3>
          <div className={styles.screenshotGrid}>
            {game.screenshots.map((shot, index) => (
              <img key={index} src={shot} alt={`Screenshot ${index + 1}`} className={styles.screenshot} />
            ))}
          </div>
        </div>
      )}
    </main>
  );
};

export default GameDetailsPage;