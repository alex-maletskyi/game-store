import { Link } from "react-router-dom";
import styles from './CategoryBanner.module.css';

/* props this component will recieve */
type CategoryBannerProps = {
  title: string;
  subtitle: string;
  linkTo: string;
  imageUrl: string;
};
//use the props blueprint
const CategoryBanner = (props: CategoryBannerProps) => {
    /* get the data from the props object */
    const { title, subtitle, linkTo, imageUrl } = props;

    return (
        /* transfers the user to games of respective category */
        <Link to={linkTo} className={styles.banner}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <img src={imageUrl} alt={title} className={styles.bannerImage} />
        </Link>
    )
}

export default CategoryBanner;