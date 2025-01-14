import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo_cinetag.png";
import HeaderLink from "./HeaderLink";


const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={logo} alt="Logo do cinetag" />
            </Link>
            <nav>
                <HeaderLink url="/">
                    Home
                </HeaderLink>
                <HeaderLink url="/Favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
};

export default Header;
