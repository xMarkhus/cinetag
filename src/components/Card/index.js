import { useFavoriteContext } from "contexts/favoritesContext";
import styles from "./Card.module.css";
import unFavoriteIcon from "./favorite_outline.png";
import favoriteIcon from "./favorite.png";
import { Link } from "react-router-dom";

const Card = ({ id, title, cover }) => {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = isFavorite ? favoriteIcon : unFavoriteIcon;

    return (
        <div className={styles.card}>
            <Link className={styles.link} to={`/${id}`}>
                <img
                    className={styles.image}
                    src={cover}
                    alt={title}
                />
                <h2>{title}</h2>
            </Link>
            <img
                className={styles.favorite}
                src={icon}
                alt="Ícone de Favoritar"
                onClick={() => {
                    addFavorite({ id, title, cover })
                }}
            />
        </div>
    )
}

export default Card;
