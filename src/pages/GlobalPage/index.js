import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "contexts/favoritesContext";
import { Outlet } from "react-router-dom";

const GlobalPage = () => {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
};

export default GlobalPage;
