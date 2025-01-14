import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.errorTitle}>
                Ops! <span className={styles.errorCode}>404</span>
            </h1>
            <h3 className={styles.errorMessage}>Página não encontrada!</h3>
            <p className={styles.suggestion}>Verifique a URL ou volte para a página inicial.</p>
        </div>
    );
};

export default NotFound;
