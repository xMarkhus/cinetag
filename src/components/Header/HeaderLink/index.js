import { Link } from "react-router-dom"
import styles from "./HeaderLink.module.css"

const HeaderLink = ({ url, children }) => {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default HeaderLink
