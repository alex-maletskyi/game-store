import styles from './GameCard.module.css';
import type { Game } from '../../types/game';
import { Link } from 'react-router-dom';

/* any object that wants to be considered GameCardProps must have a property called game, 
and the value of that property must be of type Game */
type GameCardProps = {
  game: Game; // use the imported Game type here
};

/* SIMPLE COMPONENT DEFINITION:
 the component receives one argument called "props".
 this "props" object must be of type "GameCardProps". */
const GameCard = (props: GameCardProps) => {
  // to get our game data, we access it inside the function:
  const game = props.game;
  //calculates discounted price
  const discountedPrice = game.salePercentage 
    ? (game.price * (1 - game.salePercentage / 100)).toFixed(2)
    : null;

  return (
    <Link to={`/game/${game.id}`} className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.platform}>{game.platform}</span>
        {/* LOGIC: show sale tag IF salePercentage exists */}
        {game.salePercentage && (
           <span className={styles.saleTag}>-{game.salePercentage}%</span>
        )}

        {/* LOGIC: Show NEW tag IF isNewRelease is true (and not on sale) */}
        {game.isNewRelease && !game.salePercentage && (
           <span className={styles.newTag}>NEW</span>
        )}
      </div>
      
      <img src={game.imageUrl} alt={game.title} className={styles.gameImage} />
      
      <div className={styles.gameInfo}>
        <span className={styles.title}>{game.title}</span>
        {/* PRICE LOGIC */}
        <div className={styles.priceContainer}>
          {game.salePercentage ? (
            <>
              <span className={styles.originalPrice}>${game.price.toFixed(2)}</span>
              <span className={styles.discountedPrice}>${discountedPrice}</span>
            </>
          ) : (
            <span className={styles.price}>${game.price.toFixed(2)}</span>
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.iconButton}>❤️</button>
        <button className={styles.iconButton}>🛒</button>
        <button className={styles.iconButton}>🛍️</button>
      </div>
    </Link>
  )
}

export default GameCard;